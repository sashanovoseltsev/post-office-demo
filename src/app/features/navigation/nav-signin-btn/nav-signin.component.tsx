import { SignInNavButton } from "./nav-signin.styles";
import { ReactComponent as UserIcon } from "../../../assets/user-icon.svg";
import { useStore } from "../../../stores/store";
import { TextNavMenu } from "../../../common/typography/typography.styles";
import { useTranslation } from "react-i18next";
import { NavBtn } from "../../../common/nav-btn/nav-btn.styles";
import { useNavigate } from "react-router-dom";

const NavSignin = () => {

  const { navStore: { toggleSidebar } } = useStore();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <SignInNavButton>
      <NavBtn onClick={() => toggleSidebar()}>
        <UserIcon />
      </NavBtn>
      {/* second btn is displayed only in mobile case */}
      <NavBtn onClick={() => navigate("/auth")}>
        <UserIcon />
      </NavBtn>
      <TextNavMenu onClick={() => toggleSidebar()}>{t("Sign In")}</TextNavMenu>
    </SignInNavButton>
  );
}

export default NavSignin;