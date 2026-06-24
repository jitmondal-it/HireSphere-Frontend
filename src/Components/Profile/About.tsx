import { ActionIcon, Textarea } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";
import { useMediaQuery } from "@mantine/hooks";

const About = () => {
    const dispatch = useDispatch()
    const matches = useMediaQuery('(max-width: 475px)');
    const [edit,setEdit] = useState(false);
    const profile = useSelector((state:any) =>state.profile);
    const [about,setAbout] = useState("");
         const handleClick = () =>{
            if(!edit){
                setEdit(true);
                setAbout(profile.about);
            }else setEdit(false);}
          const handleSave=() =>{
            setEdit(false);
            let updateProfile = {...profile,about:about}
            dispatch(changeProfile(updateProfile))
             successNotification("Success","About Section Updated Successfully...")
            }

  return  <div className="px-3">
        <div className="text-3xl font-semibold flex justify-between">
          About{" "}
          <div>
            {
             edit && <ActionIcon
            onClick={handleSave}
            variant="subtle"
            size={matches?"md":"lg"}
            color="green.8"
          >
              <IconCheck className="h-4/5 w-4/5" />
          </ActionIcon>
            }
            
            <ActionIcon
            onClick={handleClick}
            variant="subtle"
            size={matches?"md":"lg"}
            color={edit? "red.8":"brightSun.4"}
          >
            {edit ? (
              <IconX className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
          </div>
        </div>

        {edit ? (
          <Textarea
            value={about}
            placeholder="Tell about yourself..."
            autosize
            minRows={3}
            onChange={(event) => setAbout(event.target.value)}
          />
        ) : (
          <div className="text-sm text-mine-shaft-300 text-justify">
            {profile?.about}
          </div>
        )}
      </div>

    }

export default About;