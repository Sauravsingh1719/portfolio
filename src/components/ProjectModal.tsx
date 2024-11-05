import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { FiAlertCircle } from "react-icons/fi";

const SpringModal = ({
  isOpen,
  setIsOpen,
  project, // Accept the project data
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  project: any; // Project data type
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-auto cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-900 to-gray-600 text-white p-6 rounded-lg w-full max-w-4xl h-auto max-h-[90vh] overflow-y-auto shadow-xl cursor-default relative"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center mb-2">
                {project.title} {/* Display project title */}
              </h3>
              
              {/* Description */}
              <p className="text-center mb-4">
                {project.description} {/* Display project description */}
              </p>

              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={project.imageUrl} // Display project image
                  alt={project.title}
                  className="h-40 w-full object-cover rounded-xl"
                />
              </div>

              {/* Message */}
              <p className="text-center mb-6">
                {project.message} {/* Display project message */}
              </p>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
