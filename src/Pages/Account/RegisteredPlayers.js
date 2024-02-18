import { useRecoilState, useSetRecoilState } from "recoil";
import "./Account.css";
import {
  modalIsShownState,
  modalSlotState,
  usersRegisteredPlayersState,
} from "../../Functions/GlobalState";
import { Card, View, Heading, Flex, Text, Badge } from "@aws-amplify/ui-react";
import { format } from "date-fns";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DeletePlayer } from "../../Functions/Server";
import UpdatePlayerModal from "../../Components/Modals/UpdatePlayerModal";

export default function ViewRegisteredPlayers() {
  const [usersRegisteredPlayers, setUsersRegisteredPlayers] = useRecoilState(
    usersRegisteredPlayersState
  );

  const setModalSlot = useSetRecoilState(modalSlotState);
  const setModalIsShown = useSetRecoilState(modalIsShownState);

  function formatDate(date) {
    return format(new Date(date), "do MMMM yyyy");
  }

  function updateIsShown(registeredPlayerId) {
    let updatedList = [...usersRegisteredPlayers].map((item) => {
      if (item.id === registeredPlayerId)
        return { ...item, isShown: !item.isShown };
      else return item;
    });

    setUsersRegisteredPlayers(updatedList);
  }

  async function deletePlayer(playerId) {
    await DeletePlayer(playerId);
    setUsersRegisteredPlayers(
      usersRegisteredPlayers.filter((player) => player.id !== playerId)
    );
  }

  function openUpdatePlayerModal(component, title) {
    setModalSlot({ component: component, title: title });
    setModalIsShown(true);
  }

  return (
    <View>
      {usersRegisteredPlayers.length === 0 ? (
        <Card className="registered-player-card">
          <View className="registered-player-heading">
            <Heading textAlign="center" className="header" level={5}>
              No Registered Players
            </Heading>
          </View>
        </Card>
      ) : (
        <View>
          {usersRegisteredPlayers.map((registeredPlayer) => {
            return (
              <Card
                className={`registered-player-card ${
                  registeredPlayer.isShown ? "show" : ""
                }`}
                key={registeredPlayer.id}
              >
                <Flex
                  className="registered-player-heading"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Heading className="header" level={5}>
                    {registeredPlayer.name}
                  </Heading>
                  <Flex direction="row">
                    <Text>
                      <EditIcon
                        className="icon-button"
                        onClick={() =>
                          openUpdatePlayerModal(
                            <UpdatePlayerModal player={registeredPlayer} />,
                            "Update Player"
                          )
                        }
                      />
                    </Text>
                    <Text>
                      <DeleteIcon
                        className="icon-button delete"
                        onClick={() => deletePlayer(registeredPlayer.id)}
                      />
                    </Text>
                    <Text>
                      {registeredPlayer.isShown ? (
                        <KeyboardArrowUpIcon
                          className="icon-button"
                          onClick={() => updateIsShown(registeredPlayer.id)}
                        />
                      ) : (
                        <KeyboardArrowDownIcon
                          className="icon-button"
                          onClick={() => updateIsShown(registeredPlayer.id)}
                        />
                      )}
                    </Text>
                  </Flex>
                </Flex>
                <View className="info">
                  <Text className="text">Name: {registeredPlayer.name}</Text>
                  <Text className="text">
                    Date of Birth: {formatDate(registeredPlayer.dob)}
                  </Text>
                  <Text className="text">
                    Age Group: {registeredPlayer.ageGroup}
                  </Text>
                  <Flex className="text">
                    <Text>Positions:</Text>
                    {registeredPlayer.positions.map((position) => {
                      return (
                        <Badge className="position-badge" key={position}>
                          {position}
                        </Badge>
                      );
                    })}
                  </Flex>
                  <Text className="text">
                    Skill Level: {registeredPlayer.skillLevel}
                  </Text>
                </View>
              </Card>
            );
          })}
        </View>
      )}
    </View>
  );
}