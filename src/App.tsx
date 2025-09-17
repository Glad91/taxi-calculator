import { TaxiCalculator } from '@/components/TaxiCalculator';

function App() {
    return (
        <div className='min-h-screen bg-gray-50 py-12 px-4'>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
                    Calculateur de Taxi
                </h1>
                <TaxiCalculator />
            </div>
        </div>
    );
}

export default App;
