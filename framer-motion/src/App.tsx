import { useState } from 'react';
import { motion } from 'framer-motion';
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
      {modalOpen && (
        <Modal modalOpen={modalOpen} handleClose={close}>
          <p>Content!</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
