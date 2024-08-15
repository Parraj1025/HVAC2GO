import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function FloatSwitch(){
    const navigate = useNavigate()
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 text-center bg-gray-100"
      >
        <h1 className="text-4xl font-bold text-gray-800">Water in your drain line</h1>
        <p className="mt-4 text-xl text-gray-600"> Reasons for water in drain line
        <li>Dirty Air Filter</li>
        <li>Clogged due to microbial growth</li>
        <li>Improper installation</li>
        <h2> CLEARING YOUR DRAIN LINE
            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/4a4GTQXNnQA?si=C5lHuhmWAagmSBFq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        </h2>
        <button className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700" onClick={() => navigate('/connect-technician')}>Help Me</button>
        <button className="px-4 py-2 text-lg font-medium text-white bg-teal-500 rounded hover:bg-teal-700" onClick={() => navigate('/air-conditioning/diag')}>Start Over</button>
        </p>
        
      </motion.div>
    );
};



export default FloatSwitch;






