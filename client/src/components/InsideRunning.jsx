import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function InsideRunning(){
    const navigate = useNavigate()
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 text-center bg-gray-100"
      >
        <h1 className="text-4xl font-bold text-gray-800">So your inside unit is running on its own</h1>
        <p className="mt-4 text-xl text-gray-600">Here is what you should do next
        <p>
            <li>
                Check that thermostat is set to auto/heat/cool and not off
            </li>
            <li>
                Check breakers to outside unit
            </li>
            <li>
                Check outside capacitor on outside unit or let us help
                <div><iframe width="560" height="315" src="https://www.youtube.com/embed/PBoOx8YzD_s?si=OD1DkLK8Wy8ZRMVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            </li>
            <button className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700" onClick={()=> navigate('/connect-technician')}> Help Me </button>
        <button className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700" onClick={() => navigate('/air-conditioning/diag')}> Go Back </button>
            </p>
            </p>
      </motion.div>
    );
};

export default InsideRunning;