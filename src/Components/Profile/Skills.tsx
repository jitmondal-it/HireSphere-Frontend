import { ActionIcon, TagsInput } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";
import { useMediaQuery } from "@mantine/hooks";

const Skills = () => {
    const dispatch = useDispatch()
    const matches = useMediaQuery('(max-width: 475px)');
    const [edit,setEdit] = useState(false);
    const profile = useSelector((state:any) =>state.profile);
    const [skills,setSkills] = useState<string[]>([]);
         const handleClick = () =>{
            if(!edit){
                setEdit(true);
                setSkills(profile.skills);
            }else setEdit(false);}
          const handleSave=() =>{
            setEdit(false);
            let updateProfile = {...profile,skills:skills}
            dispatch(changeProfile(updateProfile))
             successNotification("Success","Skills Section Updated Successfully...")
            }
  return <div className="px-3">
        <div className="text-2xl  font-semibold mb-3 flex justify-between">
          Skills{" "}
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
          <TagsInput
            value={skills}
            onChange={setSkills}
            placeholder="Add skills"
            splitChars={[",", " ", "|"]}
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {profile?.skills?.map((skill: any, index: number) => (
              <div
                key={index}
                className="bg-bright-sun-400 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
}

export default Skills