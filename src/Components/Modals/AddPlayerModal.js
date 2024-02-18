import {
  View,
  Heading,
  Divider,
  Flex,
  Label,
  Input,
  SelectField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@aws-amplify/ui-react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentUserState,
  usersRegisteredPlayersState,
  modalIsShownState,
  modalSlotState,
} from "../../State/GlobalState";
import { CreatePlayer } from "../../State/Server";
import {useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./AddPlayerModal.css";

export default function AddPlayerModal() {
  const currentUser = useRecoilValue(currentUserState);
  const [usersPlayers, setUsersPlayers] = useRecoilState(
    usersRegisteredPlayersState
  );
  const setModalIsShown = useSetRecoilState(modalIsShownState);
  const setModalSlot = useSetRecoilState(modalSlotState);

  const [newPlayerInfo, setNewPlayerInfo] = useState({
    profileId: currentUser.id,
    name: null,
    dob: null,
    ageGroup: null,
    positions: [],
    skillLevel: null,
  });

  const positions = [
    "GK",
    "LB",
    "CB",
    "RB",
    "LM",
    "CDM",
    "CM",
    "CAM",
    "RM",
    "LW",
    "RW",
    "CF",
    "ST",
  ];

  const ageGroups = [
    "U7",
    "U8",
    "U9",
    "U10",
    "U11",
    "U12",
    "U13",
    "U14",
    "U15",
    "U17",
    "U18",
    "U19",
    "U20",
    "U21",
  ];
  const skillLevels = ["Beginner", "Intermediate", "Experienced"];

  function togglePosition(position) {
    if (!newPlayerInfo.positions.includes(position)) {
      setNewPlayerInfo({
        ...newPlayerInfo,
        positions: position,
      });
    } else {
      setNewPlayerInfo({
        ...newPlayerInfo,
        positions: newPlayerInfo.positions.filter((pos) => pos !== position),
      });
    }
  }

  async function addPlayer(event) {
    event.preventDefault();
    const newPlayer = await CreatePlayer(newPlayerInfo);
    setUsersPlayers([...usersPlayers, newPlayer]);
    setModalIsShown(false);
    setModalSlot(false);
  }

  return (
    <View className="content">
      <Heading className="card-header" level={5}>
        Player Information
      </Heading>
      <Divider />

      <View className="input-fields">
        <Flex direction="column" marginBottom="10px" gap="0">
          <Label htmlFor="name">Player Name:</Label>
          <Input
            marginTop="5px"
            name="name"
            onChange={(e) =>
              setNewPlayerInfo({ ...newPlayerInfo, name: e.target.value })
            }
          />
        </Flex>
        <Flex direction="column" marginBottom="10px" gap="0">
          <Label htmlFor="dob">Date of Birth:</Label>
          <Input
            marginTop="5px"
            name="dob"
            type="date"
            onChange={(e) =>
              setNewPlayerInfo({ ...newPlayerInfo, dob: e.target.value })
            }
          />
        </Flex>

        <Flex direction="column" marginBottom="10px" gap="0">
          <Label htmlFor="ageGroup">Age Group:</Label>
          <SelectField
            marginTop="5px"
            labelHidden
            padding="0"
            name="ageGroup"
            onChange={(e) =>
              setNewPlayerInfo({
                ...newPlayerInfo,
                ageGroup: e.target.value,
              })
            }
          >
            <option value="">Please Select...</option>
            {ageGroups.map((ageGroup) => {
              return (
                <option key={ageGroup} value={ageGroup}>
                  {ageGroup}
                </option>
              );
            })}
          </SelectField>
        </Flex>

        <Flex direction="column" marginBottom="10px" gap="0">
          <Label htmlFor="positions">Positions:</Label>
          <ToggleButtonGroup
            marginTop="5px"
            name="positions"
            direction="row"
            value={newPlayerInfo.positions}
            onChange={(value) => togglePosition(value)}
          >
            {positions.map((position) => {
              return (
                <ToggleButton key={position} value={position} isFullWidth>
                  {position}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Flex>

        <Flex direction="column" marginBottom="10px" gap="0">
          <Label htmlFor="skillLevel">Skill Level:</Label>
          <SelectField
            marginTop="5px"
            labelHidden
            name="skillLevel"
            onChange={(e) =>
              setNewPlayerInfo({
                ...newPlayerInfo,
                skillLevel: e.target.value,
              })
            }
          >
            <option value="">Please Select...</option>
            {skillLevels.map((skillLevel) => {
              return (
                <option key={skillLevel} value={skillLevel}>
                  {skillLevel}
                </option>
              );
            })}
          </SelectField>
        </Flex>

        <Button className="modal-button" onClick={(e) => addPlayer(e)}>
          <AddIcon fontSize="small" className="icon" />
          Add
        </Button>
      </View>
    </View>
  );
}
