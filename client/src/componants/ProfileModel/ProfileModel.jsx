//using meantine library
//refference:https://v2.mantine.dev/core/modal/
import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage} from '../../actions/uploadAction.js'
import { updateUser } from "../../actions/userAction.js";

function ProfileModel({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);
  const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
  }
  const onImageChange=(event)=>{
    if(event.target.files && event.target.files[0]){
      let img=event.target.files[0];
      event.target.name==='profileImage'
      ? setProfileImage(img)
      :setCoverImage(img)
    }
  }
    // form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      let UserData = formData;
      if (profileImage) {
        const data = new FormData();
        const fileName = Date.now() + profileImage.name;
        data.append("name", fileName);
        data.append("file", profileImage);
        UserData.profilePicture = fileName;
        try {
          dispatch(uploadImage(data));
        } catch (err) {
          console.log(err);
        }
      }
      if (coverImage) {
        const data = new FormData();
        const fileName = Date.now() + coverImage.name;
        data.append("name", fileName);
        data.append("file", coverImage);
        UserData.coverPicture = fileName;
        try {
          dispatch( uploadImage(data));
        } catch (err) {
          console.log(err);
        }
      }
      dispatch(updateUser(param.id, UserData));
      setModalOpened(false);
    };
  return (
    <>
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.95}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <form action="" className="infoForm">
          <h3>Your Info</h3>
          <div>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="infoInput"
              onChange={handleChange}
              value={formData.firstname}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="infoInput"
              onChange={handleChange}
              value={formData.lastname}
            />
          </div>
          <div>
            <input
              type="text"
              name="worksAt"
              placeholder="works at"
              className="infoInput"
              onChange={handleChange}
              value={formData.worksAt}
            />
          </div>
          <div>
            <input
              type="text"
              name="livesin"
              placeholder="lives in"
              className="infoInput"
              onChange={handleChange}
              value={formData.livesin}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="infoInput"
              onChange={handleChange}
              value={formData.country}
            />
          </div>
          <div>
            <input
              type="text"
              name="relationship"
              placeholder="Relationship Status"
              className="infoInput"
              onChange={handleChange}
              value={formData.relationship}
            />
          </div>
          <div>
            Profile Image
            <input type="file" name="profileImage" id="" onChange={onImageChange}/>
            Cover Image
            <input type="file" name="coverImage" id=""  onChange={onImageChange}/>
          </div>
          <button className="button infoButton" onClick={handleSubmit}>Update</button>
        </form>
      </Modal>
    </>
  );
}
export default ProfileModel;
