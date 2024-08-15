import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function OutsideRunning(){
    const navigate = useNavigate()
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 text-center bg-gray-100"
      >
        <h1 className="text-4xl font-bold text-gray-800">So your outside unit is running on its own</h1>
        <p className="mt-4 text-xl text-gray-600">Here is what you should do next
            <li>
                Check your refridgerant lines for freezing at indoor and outdoor units
            </li>
            <li>
                Set fan to 'On' position at thermostat
            </li>
            <li>
                Check inside blower motot for operation status (if you cant hear it running. Follow video for inspection)
            </li>
            <h2>!!WARNING!!  turn off power at braker panel before working on unit</h2>
            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/glFsL73YmNU?si=lg4clAEQ1bmct3Ea" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <button className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700" onClick={()=> navigate('/connect-technician')}> HELP ME</button>
            <button className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700" onClick={()=> navigate('/air-conditioning/diag')}> Start Over</button>
            </p>
      </motion.div>
    );
};

export default OutsideRunning;