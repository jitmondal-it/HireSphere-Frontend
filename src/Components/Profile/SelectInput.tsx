import { useEffect, useState } from "react";
import { Combobox, InputBase, ScrollArea, useCombobox } from "@mantine/core";


const SelectInput = (props: any) => {
  useEffect(() => {
    setData(props.options);
    setValue(props.form.getInputProps(props.name).value)
    setSearch(props.form.getInputProps(props.name).value)
  }, []);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [data, setData] = useState<string[]>([]);
  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const exactOptionMatch = data.some(
    (item) => item === search
  );

  const filteredOptions = data
    .filter((item) => item.toLowerCase().includes(search?.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item} key={item}>
        {item}
      </Combobox.Option>
    ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        if (val === "$create") {
          setData((current) => [...current, search]);
          setValue(search);
          props.form.setFieldValue(props.name,search)
        } else {
          setValue(val);
          setSearch(val);
          props.form.setFieldValue(props.name,val)
        }

        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase {...props.form.getInputProps(props.name)}
         withAsterisk
        label={props.label}
          placeholder={props.placeholder}
          leftSection={<props.leftSection  stroke={1.5 } />}
          value={search}
          onChange={(event) => {
            setSearch(event.currentTarget.value);
            combobox.openDropdown();
          }}
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
            <ScrollArea.Autosize mah={200} type="scroll">
          {filteredOptions}

          {!exactOptionMatch && search?.trim()?.length > 0 && (
            <Combobox.Option value="$create">
              + Create "{search}"
            </Combobox.Option>
          )}
          </ScrollArea.Autosize>

          {filteredOptions.length === 0 && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default SelectInput;
