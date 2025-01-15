import Header from "@components/layout/header/Header";
import GameRoomHeader from "@components/layout/gameRoomHeader/GameRoomHeader";
import Footer from "@components/layout/footer/Footer";
import Modal from "@components/ui/modal/Modal";
import Toast from "@components/ui/toast/Toast";
import { Outlet, useLocation } from "react-router-dom";
import { Wrapper, Container } from "./LayoutStyle";
import { useModalStore } from "@store/useModalStore";

const HIDDEN_HEADERS = "/game/room/";

export default function Layout() {
  const { showModal } = useModalStore();
  const location = useLocation();
  const pathname = location.pathname;
  const isHiddenHeader = pathname.includes(HIDDEN_HEADERS);

  return (
    <>
      <Wrapper>
        {!isHiddenHeader ? <Header /> : <GameRoomHeader />}
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Wrapper>

      <Toast />
      {showModal && <Modal />}
    </>
  );
}
