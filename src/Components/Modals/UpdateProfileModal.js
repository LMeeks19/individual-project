import {
  Card,
  Divider,
  Input,
  Heading,
  View,
  Flex,
  Label,
  Button,
  Text,
  SelectField,
  PhoneNumberField,
} from "@aws-amplify/ui-react";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import "./UpdateProfileModal.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  UpdateProfileModalIsShownState,
  currentUserState,
} from "../../State/GlobalState";
import { useEffect, useState } from "react";
import { UpdateProfile } from "../../State/Server";
import { format } from "date-fns";

export default function CreateProfileModal() {
  const setIsUpdateProfileModalShown = useSetRecoilState(
    UpdateProfileModalIsShownState
  );
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  const [updatedProfileInfo, setUpdatedProfileInfo] = useState({
    id: currentUser.id,
    username: currentUser.username,
    name: currentUser.name,
    dob: currentUser.dob,
    email: currentUser.email,
    phoneNumber: currentUser.phoneNumber,
    accountType: currentUser.accountType,
    street: currentUser.street,
    townCity: currentUser.townCity,
    county: currentUser.county,
    postcode: currentUser.postcode,
  });

  async function updateProfile(event) {
    event.preventDefault();
    setCurrentUser(await UpdateProfile(updatedProfileInfo));
    setIsUpdateProfileModalShown(false);
  }

  const [maxDateAllowed, setMaxDateAllowed] = useState("");

  useEffect(() => {
    function maxDate() {
      const dateNow = new Date();
      dateNow.setFullYear(dateNow.getFullYear() - 18);
      setMaxDateAllowed(format(dateNow, "yyyy-MM-dd"));
    }
    maxDate();
  }, []);

  return (
    <Card className="modal">
      <View className="banner">
        <Heading className="header" level={4}>
          Update Profile Modal
        </Heading>
        <Heading
          className="close"
          level={4}
          onClick={() => setIsUpdateProfileModalShown(false)}
        >
          <CloseIcon fontSize="large" className="icon" />
          Close
        </Heading>
      </View>
      <View className="content" as="form" onSubmit={(e) => updateProfile(e)}>
        <Heading className="card-header" level={5}>
          Profile Information
        </Heading>
        <Divider />

        <View className="input-fields">
          <Flex direction="column" marginBottom="10px" gap="0">
            <Label htmlFor="username">Username:</Label>
            <Input
              name="username"
              value={updatedProfileInfo.username}
              isRequired
              isDisabled
            />
          </Flex>
          <Flex direction="column" marginBottom="10px" gap="0">
            <Label htmlFor="email">Email:</Label>
            <Input
              name="email"
              value={updatedProfileInfo.email}
              isRequired
              isDisabled
            />
          </Flex>
          <Flex direction="column" marginBottom="10px" gap="0">
            <Label htmlFor="name">Name:</Label>
            <Input
              name="name"
              defaultValue={updatedProfileInfo.name}
              isRequired
              onChange={(e) =>
                setUpdatedProfileInfo({
                  ...updatedProfileInfo,
                  name: e.target.value,
                })
              }
            />
          </Flex>
          <Flex direction="column" marginBottom="10px" gap="0">
            <Label htmlFor="dob">Date of Birth:</Label>
            <Input
              name="dob"
              defaultValue={updatedProfileInfo.dob}
              type="date"
              max={maxDateAllowed}
              isRequired
              onChange={(e) =>
                setUpdatedProfileInfo({
                  ...updatedProfileInfo,
                  dob: e.target.value,
                })
              }
            />
          </Flex>
          <Flex direction="column" marginBottom="10px" gap="0">
            <Label htmlFor="phoneNumber">Phone Number:</Label>
            <Input
              name="phoneNumber"
              defaultValue={updatedProfileInfo.phoneNumber}
              isRequired
              onChange={(e) =>
                setUpdatedProfileInfo({
                  ...updatedProfileInfo,
                  phoneNumber: e.target.value,
                })
              }
            />
          </Flex>
          <Flex direction="column" marginBottom="10px" gap="0">
            <Label htmlFor="accountType">Account Type:</Label>
            <SelectField
              name="accountType"
              value={updatedProfileInfo.accountType}
              isRequired
              isDisabled
              onChange={(e) =>
                setUpdatedProfileInfo({
                  ...updatedProfileInfo,
                  accountType: e.target.value,
                })
              }
            >
              <option value={null}>PLEASE SELECT...</option>
              <option value="PARENT">PARENT</option>
              <option value="COACH">COACH</option>
            </SelectField>
          </Flex>
          <Flex direction="column" marginBottom="10px" gap="0">
            <Label htmlFor="street">Street:</Label>
            <Input
              name="street"
              defaultValue={updatedProfileInfo.street}
              isRequired
              onChange={(e) =>
                setUpdatedProfileInfo({
                  ...updatedProfileInfo,
                  street: e.target.value,
                })
              }
            />
          </Flex>
          <Flex direction="column" marginBottom="10px" gap="0">
            <Label htmlFor="townCity">Town/City:</Label>
            <Input
              name="townCity"
              defaultValue={updatedProfileInfo.townCity}
              isRequired
              onChange={(e) =>
                setUpdatedProfileInfo({
                  ...updatedProfileInfo,
                  townCity: e.target.value,
                })
              }
            />
          </Flex>
          <Flex direction="column" marginBottom="10px" gap="0">
            <Label htmlFor="county">County:</Label>
            <Input
              name="county"
              defaultValue={updatedProfileInfo.county}
              isRequired
              onChange={(e) =>
                setUpdatedProfileInfo({
                  ...updatedProfileInfo,
                  county: e.target.value,
                })
              }
            />
          </Flex>
          <Flex direction="column" marginBottom="10px" gap="0">
            <Label htmlFor="postcode">Postcode:</Label>
            <Input
              name="postcode"
              defaultValue={updatedProfileInfo.postcode}
              isRequired
              onChange={(e) =>
                setUpdatedProfileInfo({
                  ...updatedProfileInfo,
                  postcode: e.target.value,
                })
              }
            />
          </Flex>
        </View>

        <Button className="modal-button" type="submit">
          <SaveIcon fontSize="small" className="icon" />
          Save
        </Button>
      </View>
    </Card>
  );
}
