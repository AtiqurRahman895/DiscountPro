// import PropTypes from 'prop-types';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../assets/errorNotFoundImage.png'
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    const {error,status,statusText}= useRouteError();
    
    return (
        <>
            <Helmet>
                <title>{statusText} | Gadget Heaven</title>
            </Helmet>

            <div className='h-lvh place-items-center grid gap-3 content-center bg-white'>
                {status==404?
                    <img src={errorImage} alt={`${status}, ${statusText}`} className='w-[200px]' />:
                    <>
                        <h1 className='font-extrabold text-9xl text-orange-950'>!</h1>
                        <h1 className='text-orange-950'>{error.message||`${status}, ${statusText}`}</h1>
                    </>

                }
                <Link to={-1} className="btn bg-orange-950 hover:bg-orange-900 font-bold text-white">Go Back</Link>
            </div>
        </>

    );
};

// ErrorPage.propTypes = {
    
// };

export default ErrorPage;