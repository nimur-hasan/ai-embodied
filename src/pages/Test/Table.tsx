import {
  Box,
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import EditIcon from "../../assets/icons/edit-pen-icon.svg";

export default function Table() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [columnName, setColumnName] = useState("");
  const [tableHeader, setTableHeader] = useState<any>([])
  const [tableRows, setTableRows] = useState<any>([])

  let newTableHeader = [
    {
      type: "checkbox",
      lable: "checkbox",
    },
    {
      type: "string",
      lable: "Name",
    },
    {
      type: "string",
      lable: "Description",
    },
    {
      type: "string",
      lable: "Category",
    },
    {
      type: "string",
      lable: "Output",
    },
    {
      type: "string",
      lable: "Action",
    },
  ];

  const newTableRows: any = [
    {
      condition: 0,
      item: [
        {
          type: "checkbox",
          lable: "checkbox",
        },
        {
          type: "string",
          lable: "Name",
        },
        {
          type: "string",
          lable:
            "The patients name given in the transcript. This is a mandatory field and the data type should be string or text. Along with this you should choose the highest occuring name in the corpus, this field .",
        },
        {
          type: "string",
          lable: "BIODATA",
        },
        {
          type: "input",
          lable: "John",
        },
        {
          type: "action",
          lable: EditIcon,
        },
      ],
    },
    {
      condition: 1,
      item: [
        {
          type: "checkbox",
          lable: "checkbox",
        },
        {
          type: "string",
          lable: "OCCUPATION",
        },
        {
          type: "string",
          lable: "represents the occupation of the patient",
        },
        {
          type: "string",
          lable: "BIODATA",
        },
        {
          type: "input",
          lable: "Teacher",
        },
        {
          type: "action",
          lable: EditIcon,
        },
      ],
    },
    {
      condition: 0,
      item: [
        {
          type: "checkbox",
          lable: "checkbox",
        },
        {
          type: "string",
          lable: "SMOKE",
        },
        {
          type: "string",
          lable: "indicates whether the patient is a smoker.",
        },
        {
          type: "string",
          lable: "BIODATA",
        },
        {
          type: "input",
          lable: "FALSE",
        },
        {
          type: "action",
          lable: EditIcon,
        },
      ],
    },
    {
      condition: 0,
      item: [
        {
          type: "checkbox",
          lable: "checkbox",
        },
        {
          type: "string",
          lable: "ALCOHOL",
        },
        {
          type: "string",
          lable: "indicates whether patient consumes alcohol regularly",
        },
        {
          type: "string",
          lable: "BIODATA",
        },
        {
          type: "input",
          lable: "TRUE",
        },
        {
          type: "action",
          lable: EditIcon,
        },
      ],
    },
    {
      condition: 2,
      item: [
        {
          type: "checkbox",
          lable: "checkbox",
        },
        {
          type: "string",
          lable: "ALLERGY",
        },
        {
          type: "string",
          lable: "indicates whether patient has any allergies",
        },
        {
          type: "string",
          lable: "BIODATA",
        },
        {
          type: "input",
          lable: "FALSE",
        },
        {
          type: "action",
          lable: EditIcon,
        },
      ],
    },
    {
      condition: 0,
      item: [
        {
          type: "checkbox",
          lable: "checkbox",
        },
        {
          type: "string",
          lable: "BLOODPRESSUR",
        },
        {
          type: "string",
          lable: "gives the patients blood pressure stats.",
        },
        {
          type: "string",
          lable: "VITALS",
        },
        {
          type: "input",
          lable: "120/80",
        },
        {
          type: "action",
          lable: EditIcon,
        },
      ],
    },
    {
      condition: 3,
      item: [
        {
          type: "checkbox",
          lable: false,
        },
        {
          type: "string",
          lable: "MOOD",
        },
        {
          type: "string",
          lable: "gives the patients mood if it is mentioned.",
        },
        {
          type: "string",
          lable: "BIODATA",
        },
        {
          type: "input",
          lable: "",
        },
        {
          type: "action",
          lable: EditIcon,
        },
      ],
    },
  ];

  useEffect(() => {
    setTableHeader(newTableHeader)
    setTableRows(newTableRows)
  }, [])

  const handleCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    index2: number
  ) => {
    console.log(e.target.checked);
    console.log(index);
    console.log(index2);
    const selectedRow = tableRows[index].item;
    selectedRow[index2].lable = e.target.checked;
    console.log(tableRows);
  };

  const handleCreateNewColumn = () => {
    const updateTableHeader = [...tableHeader,  {
      type: "input",
      lable: columnName,
    }];

    let updateTableRows:any = []
    tableRows.map((row:any, index:any) => {
      const selectedRow = tableRows[index]
      const selectedItem = [...selectedRow.item, {type: 'input', label: ''}]
      selectedRow.item = selectedItem
      updateTableRows = [...updateTableRows, selectedRow]
    })

    setTableRows(updateTableRows)
    setTableHeader(updateTableHeader)

    onClose()
  };


  useEffect(() => {}, [tableHeader])
  return (
    <Box>
      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#F2F5FA" }}>
            {tableHeader.map((item:any, index:any) => (
              <th>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textColor="#142536"
                  fontSize="14px"
                  fontWeight="500"
                  p="22px"
                >
                  {item.type == "checkbox" ? <Checkbox /> : item.lable}
                </Box>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((item: any, index: any) => (
            <tr
              style={{
                borderTop: `${
                  (item.condition == 0 && "0.5px solid #E7ECF3") ||
                  (item.condition == 1 && "1px solid #059669") ||
                  (item.condition == 2 && "1px solid #D97706") ||
                  (item.condition == 3 && "1px solid #DC2626")
                }`,
                borderBottom: `${
                  (item.condition == 0 && "0px solid #E7ECF3") ||
                  (item.condition == 1 && "1px solid #059669") ||
                  (item.condition == 2 && "1px solid #D97706") ||
                  (item.condition == 3 && "1px solid #DC2626")
                }`,
                background: `${
                  (item.condition == 0 && "#FFF") ||
                  (item.condition == 1 && "#F7FAF7") ||
                  (item.condition == 2 && "#FDF8F2") ||
                  (item.condition == 3 && "#FDF2F2")
                }`,
                // borderLeft: "0px solid #E7ECF3",
                // borderRight: "0px solid #E7ECF3",
              }}
            >
              {item.item.map((item2: any, index2: any) => (
                <td>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    color="#142536"
                    fontSize="14px"
                    px="22px"
                    py="26px"
                  >
                    {item2.type == "checkbox" && (
                      <Checkbox
                        onChange={(e) => handleCheckChange(e, index, index2)}
                      />
                    )}
                    {item2.type == "string" && item2.lable}
                    {item2.type == "action" && (
                      <Box cursor="pointer">
                        <img onClick={onOpen} src={item2.lable} />
                      </Box>
                    )}
                    {item2.type == "input" && (
                      <MyInput defaultValue={item2.lable} />
                    )}
                  </Box>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Column</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              onChange={(e) => setColumnName(e.target.value)}
              type="text"
              placeholder="Column name"
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={handleCreateNewColumn}
              isDisabled={columnName == ""}
              colorScheme="blue"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export function MyInput({ defaultValue }: { defaultValue: string }) {
  const [value, setValue] = useState<string>(defaultValue);
  return <Input onChange={(e) => setValue(e.target.value)} value={value} />;
}
