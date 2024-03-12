//using meantine library
//refference:https://v2.mantine.dev/core/modal/
import { Modal,useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

function ShareModel({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.95}
        size='55%'
        onClose={()=>setModalOpened(false)}
        opened={modalOpened}
        >
          <PostShare/>
      </Modal>
    </>
  );
}
export default ShareModel;