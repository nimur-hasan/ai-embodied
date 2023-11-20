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
import AddIcon from "../../assets/icons/add-icon.svg";
import { useDataStateProps } from "./Test";
import { FiCheckCircle } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function Table({ data }: useDataStateProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [columnName, setColumnName] = useState("");
  const [tableHeader, setTableHeader] = useState<any>([]);
  const [tableRows, setTableRows] = useState<any>([]);

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
      ],
    },
  ];

  // useEffect(() => {
  //   setTableHeader(newTableHeader);
  //   setTableRows(newTableRows);
  // }, []);

  const handleCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // console.log(e.target.checked);
    // console.log(index);
    // console.log(index2);
    // const selectedRow = tableRows[index].item;
    // selectedRow[index2].lable = e.target.checked;
    // console.log(tableRows);
  };

  const handleCreateNewColumn = () => {
    const updateTableHeader = [
      ...tableHeader,
      columnName
    ];

    setTableHeader(updateTableHeader);

    onClose();
  };

  useEffect(() => {
    const obj = data.data[0];
    const keys = Object.keys(obj);
    console.log(keys);
    let filtered: any = [];
    keys.map((key) => {
      if (key != "highlight") {
        filtered = [...filtered, key];
      }
    });
    console.log(filtered);
    setTableHeader(filtered);
    // setTableHeader(keys);
    setTableRows(data.data);
  }, []);
  return (
    <Box>
      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#F2F5FA" }}>
            <th>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                textColor="#142536"
                fontSize="14px"
                fontWeight="500"
                p="22px"
              >
                <Checkbox />
              </Box>
            </th>
            {tableHeader.map((item: any, index: any) => (
              <th>
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  textColor="#142536"
                  fontSize="14px"
                  fontWeight="500"
                  p="22px"
                >
                  {item}
                </Box>
              </th>
            ))}
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
                Action
              </Box>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((item: any, index: any) => (
            <tr
              style={{
                borderTop: `${
                  (item.highlight.status == 0 && "0.5px solid #E7ECF3") ||
                  (item.highlight.status == 'green' && "1px solid #059669") ||
                  (item.highlight.status == 'yellow' && "1px solid #D97706") ||
                  (item.highlight.status == 'red' && "1px solid #DC2626")
                }`,
                borderBottom: `${
                  (item.highlight.status == 0 && "0px solid #E7ECF3") ||
                  (item.highlight.status == 'green' && "1px solid #059669") ||
                  (item.highlight.status == 'yellow' && "1px solid #D97706") ||
                  (item.highlight.status == 'red' && "1px solid #DC2626")
                }`,
                background: `${
                  (item.highlight.status == 0 && "#FFF") ||
                  (item.highlight.status == 'green' && "#F7FAF7") ||
                  (item.highlight.status == 'yellow' && "#FDF8F2") ||
                  (item.highlight.status == 'red' && "#FDF2F2")
                }`,
                // borderLeft: "0px solid #E7ECF3",
                // borderRight: "0px solid #E7ECF3",
              }}
            >
              <td>
                <th>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    textColor="#142536"
                    fontSize="14px"
                    fontWeight="500"
                    p="22px"
                  >
                    <Checkbox />
                  </Box>
                </th>
              </td>
              {tableHeader.map((item2: any, index2: any) => (
                <>
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
                      {/* {item2.type == "string" && item2.lable}
                    {item2.type == "action" && (
                      <Box cursor="pointer">
                        <img onClick={onOpen} src={item2.lable} />
                      </Box>
                    )}
                    {item2.type == "input" && (
                      <MyInput defaultValue={item2.lable} />
                    )} */}
                      {typeof item[item2] == "string" && item[item2]}
                      {item[item2]?.type == "boolean" &&
                        item2 == "valid" &&
                        (item[item2]?.value == true ? (
                          <FiCheckCircle color="#0000ff" />
                        ) : (
                          <FiX color="#ff0000"/>
                        ))}
                      {/* {JSON.stringify(item[item2]?.value)} */}
                      {
                        item2 == "output" && (
                          <MyInput defaultValue={item[item2].value} />
                        )
                        // (item[item2]?.value == true ? "true" : "false")
                      }
                      {
                        !item[item2] && <MyInput defaultValue="" />
                      }
                      {/* {JSON.stringify(item[item2]?.value)} */}
                    </Box>
                  </td>
                </>
              ))}
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
                  <img
                    height="26px"
                    width="26px"
                    onClick={onOpen}
                    src={AddIcon}
                  />
                </Box>
              </td>
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
  return (
    <Input
      minW={"80px"}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
}
