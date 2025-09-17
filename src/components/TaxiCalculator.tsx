import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Calculator, Clock, Car } from 'lucide-react'

type TariffType = 'A' | 'B' | 'C' | 'D'

interface TariffRates {
  A: number
  B: number
  C: number
  D: number
}

const TARIFFS: TariffRates = {
  A: 1.08,
  B: 1.62,
  C: 2.16,
  D: 3.24
}

const PICKUP_FEE = 2.94
const WAITING_RATE_PER_HOUR = 29.44

export function TaxiCalculator() {
  const [distance, setDistance] = useState<string>('')
  const [waitingTime, setWaitingTime] = useState<string>('')
  const [selectedTariff, setSelectedTariff] = useState<TariffType>('A')
  const [total, setTotal] = useState<number | null>(null)

  const calculateFare = () => {
    const distanceKm = parseFloat(distance)
    const waitingMinutes = parseFloat(waitingTime) || 0

    if (isNaN(distanceKm) || distanceKm <= 0) {
      return
    }

    const distanceCost = distanceKm * TARIFFS[selectedTariff]
    const waitingCost = (waitingMinutes / 60) * WAITING_RATE_PER_HOUR
    const totalCost = PICKUP_FEE + distanceCost + waitingCost

    setTotal(totalCost)
  }

  const reset = () => {
    setDistance('')
    setWaitingTime('')
    setSelectedTariff('A')
    setTotal(null)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Car className="h-6 w-6" />
          Calculateur de Course Taxi
        </CardTitle>
        <CardDescription>
          Calculez le coût de votre course de taxi
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="distance">Distance (km)</Label>
          <Input
            id="distance"
            type="number"
            placeholder="0.0"
            step="0.1"
            min="0"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tariff">Tarif</Label>
          <Select value={selectedTariff} onValueChange={(value: TariffType) => setSelectedTariff(value)}>
            <SelectTrigger id="tariff">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">Tarif A - {TARIFFS.A}€/km</SelectItem>
              <SelectItem value="B">Tarif B - {TARIFFS.B}€/km</SelectItem>
              <SelectItem value="C">Tarif C - {TARIFFS.C}€/km</SelectItem>
              <SelectItem value="D">Tarif D - {TARIFFS.D}€/km</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="waiting" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Temps d'attente (minutes)
          </Label>
          <Input
            id="waiting"
            type="number"
            placeholder="0"
            step="1"
            min="0"
            value={waitingTime}
            onChange={(e) => setWaitingTime(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={calculateFare} className="flex-1">
            <Calculator className="h-4 w-4 mr-2" />
            Calculer
          </Button>
          <Button variant="outline" onClick={reset}>
            Reset
          </Button>
        </div>

        {total !== null && (
          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Prise en charge:</span>
                  <span>{PICKUP_FEE.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Distance ({distance}km × {TARIFFS[selectedTariff]}€):</span>
                  <span>{(parseFloat(distance) * TARIFFS[selectedTariff]).toFixed(2)}€</span>
                </div>
                {parseFloat(waitingTime) > 0 && (
                  <div className="flex justify-between">
                    <span>Attente ({waitingTime}min × {(WAITING_RATE_PER_HOUR/60).toFixed(2)}€/min):</span>
                    <span>{((parseFloat(waitingTime) / 60) * WAITING_RATE_PER_HOUR).toFixed(2)}€</span>
                  </div>
                )}
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg text-green-700">
                  <span>Total:</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}