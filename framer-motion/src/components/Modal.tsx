import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

interface ModalProps {
  children: React.ReactElement;
  modalOpen: boolean;
  handleClose: () => void;
  animationType: 'dropIn' | 'flip' | 'badSuspension';
}

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const flip = {
  hidden: {
    transform: 'scale(0) rotateX(-360deg)',
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
  visible: {
    transform: 'scale(1) rotateX(0deg)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: 'scale(0) rotateX(360deg)',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const badSuspension = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transform: 'scale(0) rotate(-360deg)',
  },
  visible: {
    y: '-10vh',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
};

const Modal: React.FC<ModalProps> = ({
  children,
  modalOpen,
  handleClose,
  animationType,
}) => {
  let variant;
  switch (animationType) {
    case 'dropIn':
      variant = dropIn;
      break;
    case 'flip':
      variant = flip;
      break;
    case 'badSuspension':
      variant = badSuspension;
      break;
  }
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={variant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
