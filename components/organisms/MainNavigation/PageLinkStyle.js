import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
    justify-content: space-between;
  }
  .nav-link {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 200px;
    justify-content: space-around;
  }

  .action {
    width: inherit;
    padding: 0;
    justify-content: space-between;
    color: black;
    font-size: 13px;

    &:visited {
      color: black;
    }
  }
  .navbar {
    align-self: center;
  }

  .brand-logo {
    height: 80px;
    width: auto;
    object-fit: contain;
  }

  .cart-container {
    display: flex;
    align-items: center;
    align-self: center;
    float: right;
    background-color: var(--grey-clr);
    padding: 15px;
    cursor: pointer;
  }

  .cart {
    height: 30px;
    width: auto;
  }
  li > a {
    text-decoration: none;
  }

  .logo {
    align-self: center;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
    Header {
      justify-content: space-between;
    }
    .nav-link {
      display: none;
    }

    .brand-logo {
      height: 50px;
      padding: 5px;
    }
  }
`;
