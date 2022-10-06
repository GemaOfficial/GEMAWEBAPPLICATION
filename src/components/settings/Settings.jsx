import React from "react";
import Email from "../../assets/auth/Email";
import Password from "../../assets/auth/Password";
import UserIcon from "../../assets/auth/UserIcon";
import Call from "../../assets/footer/call";
import Profile from "../../assets/profile/Profile";
import {
  SettingsContainer,
  SettingsBody,
  SettingsButton,
  SettingsForm,
  SettingsHeader,
  SettingsImg,
  SettingsTextInput,
  SettingsTitle,
  SettingsWrapper,
  SettingsCard,
  SettingsFormLabel,
  SettingsGroupIcon,
  SettingsIcon,
} from "./SettingsElement";

function Settings() {
  return (
    <SettingsContainer>
      <SettingsBody>
        <SettingsHeader>User settings</SettingsHeader>
        <SettingsImg>
          <Profile />
        </SettingsImg>
        <SettingsTitle>Change The Profile</SettingsTitle>
        <SettingsForm>
          <SettingsCard>
            <SettingsFormLabel>Full Name</SettingsFormLabel>
            <SettingsGroupIcon>
              <SettingsIcon>
                <UserIcon />
              </SettingsIcon>
              <SettingsTextInput type="text" placeholder="Full Name Here" />
            </SettingsGroupIcon>
            <SettingsFormLabel>Email</SettingsFormLabel>
            <SettingsGroupIcon>
              <SettingsIcon>
                <Email />
              </SettingsIcon>
              <SettingsTextInput type="email" placeholder="Email Here" />
            </SettingsGroupIcon>
            <SettingsFormLabel>City</SettingsFormLabel>
            <SettingsGroupIcon>
              <SettingsIcon>
                <Email />
              </SettingsIcon>
              <SettingsTextInput type="text" placeholder="City" />
            </SettingsGroupIcon>
            <SettingsFormLabel>Current Password</SettingsFormLabel>
            <SettingsGroupIcon>
              <SettingsIcon>
                <Password />
              </SettingsIcon>
              <SettingsTextInput
                type="text"
                placeholder="Enter Current Password"
              />
            </SettingsGroupIcon>
            <SettingsFormLabel>Choose Language</SettingsFormLabel>
            <SettingsGroupIcon>
              <SettingsIcon><UserIcon /></SettingsIcon>
              <SettingsTextInput
                type="text"
                placeholder="Choose Your Language"
              />
            </SettingsGroupIcon>
          </SettingsCard>

          <SettingsCard>
            <SettingsFormLabel>Phone</SettingsFormLabel>
            <SettingsGroupIcon>
              <SettingsIcon>
                <Call />
              </SettingsIcon>
              <SettingsTextInput type="text" placeholder="Enter Phone number" />
            </SettingsGroupIcon>
            <SettingsFormLabel>Country</SettingsFormLabel>
            <SettingsGroupIcon>
              <SettingsIcon><Email /></SettingsIcon>
              <SettingsTextInput type="text" placeholder="Country" />
            </SettingsGroupIcon>
            <SettingsFormLabel>Zip Code</SettingsFormLabel>
            <SettingsGroupIcon>
              <SettingsIcon>
                <Email />
              </SettingsIcon>
              <SettingsTextInput type="text" placeholder="Enter Zip Code" />
            </SettingsGroupIcon>
            <SettingsFormLabel>New Password</SettingsFormLabel>
            <SettingsGroupIcon>
              <SettingsIcon>
                <Password />
              </SettingsIcon>
              <SettingsTextInput type="text" placeholder="Enter New Password" />
            </SettingsGroupIcon>
            <SettingsFormLabel>Confirm Password</SettingsFormLabel>
            <SettingsGroupIcon>
              <SettingsIcon>
                <Password />
              </SettingsIcon>
              <SettingsTextInput type="text" placeholder="Confirm Password" />
            </SettingsGroupIcon>
          </SettingsCard>

        </SettingsForm>

        <SettingsButton>Update</SettingsButton>
      </SettingsBody>
    </SettingsContainer>
  );
}

export default Settings;
