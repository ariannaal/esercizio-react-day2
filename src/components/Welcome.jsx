//Crea un componente Welcome con un Alert e un sottotitolo per il tuo shop.

import Alert from 'react-bootstrap/Alert';

const Welcome = () => (
    <>
        <Alert className='alert'>
            New books on Sale - Make sure to check them out!
        </Alert>
        <h2 className='m-4'>
           Where stories illuminate the night
        </h2>
    </>


)

export default Welcome;