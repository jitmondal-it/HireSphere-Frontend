import { useEffect, useState } from "react";
import {
  Combobox,
  useCombobox,
  PillsInput,
  Pill,
  Group,
  Checkbox,
} from "@mantine/core";
import { IconSearch, IconSelector } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";

const MultiInput = (props:any) => {
  const dispatch = useDispatch();
   useEffect(()=>{
    setData(props.options || []);
   },[props.options])

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [search, setSearch] = useState("");
  const [data, setData] = useState<string[]>([
    "React",
    "Node.js",
    "Java",
    "Python",
    "MongoDB",
  ]);

  const [value, setValue] = useState<string[]>([]);

  const MAX_DISPLAYED_VALUES = 2;

  const exactOptionMatch = data.some(
    (item) => item && item.toLowerCase() === search.trim().toLowerCase()
  );

  
  const handleValueSelect = (val: string) => {
    if (val === "$create") {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
      dispatch(updateFilter({[props.title]:[...value,search]}))
    } else {
      dispatch(updateFilter({[props.title]:value.includes(val)?value.filter((v)=> v != val):[...value,val]}))
      setValue((current) =>
        current.includes(val)
          ? current.filter((v) => v !== val)
          : [...current, val]
      );
    }

    setSearch("");
  };
  const handleValueRemove = (val: string) =>{
    dispatch(updateFilter({[props.title]:value.filter((v)=> v != val)}))
    setValue((current) => current.filter((v) => v !== val));
  }

  const options = data
    .filter((item) =>
     item && item.toLowerCase().includes(search.trim().toLowerCase())
    )
    .map((item) => (
      <Combobox.Option
        value={item}
        key={item}
        active={value.includes(item)}
      >
        <Group gap="sm">
          <Checkbox
            size="xs"
            color="brightSun.4"
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: "none" }}
          />
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  const visibleValues = value.slice(0, MAX_DISPLAYED_VALUES);
  const remainingCount = value.length - MAX_DISPLAYED_VALUES;

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput
          variant="unstyled"
          rightSection={<IconSelector />}
          onClick={() => combobox.openDropdown()}
          leftSection={
            <div className="text-bright-sun-400 bg-mine-shaft-700 p-1 rounded-full mr-2">
              <props.icon size={20} />
            </div>
          }
        >
          <Pill.Group>
            {visibleValues.map((item) => (
              <Pill
                key={item}
                withRemoveButton
                onRemove={() => handleValueRemove(item)}
              >
                {item}
              </Pill>
            ))}

            {remainingCount > 0 && <Pill>+{remainingCount} more</Pill>}

            {/* ✅ Added this only */}
            <PillsInput.Field
              value={search}
              placeholder={props.title}
              onChange={(event) =>
                setSearch(event.currentTarget.value)
              }
              onFocus={() => combobox.openDropdown()}
            />
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search Category"
        />
        <Combobox.Options>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">
              + Create "{search}"
            </Combobox.Option>
          )}

          {exactOptionMatch &&
            search.trim().length > 0 &&
            options.length === 0 && (
              <Combobox.Empty>Nothing found</Combobox.Empty>
            )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiInput;