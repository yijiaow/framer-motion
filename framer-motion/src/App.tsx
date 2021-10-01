import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => setModalOpen(true);

  const close = () => setModalOpen(false);

  return (
    <div>
      <motion.button
        onClick={() => (modalOpen ? close() : open())}
        className="trigger-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Launch Modal
      </motion.button>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null} // fires when all exiting nodes completed animating out
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <p>
              Ea ad cupidatat duis proident. Duis cupidatat officia non
              voluptate irure eiusmod enim Lorem pariatur eu elit occaecat.
              Mollit aliqua aute elit laborum ex consectetur officia irure
              veniam ea nostrud ullamco. Tempor ipsum quis fugiat pariatur
              cillum reprehenderit officia aute Lorem ad id nostrud.
            </p>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
