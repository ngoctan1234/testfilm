import { FormGroup, Form, Label, Button, Table, Card, CardBody, CardTitle, CardText, CardSubtitle, InputGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState } from "react";
import { UncontrolledDropdown, NavbarText, Navbar, NavbarBrand, Collapse, NavbarToggler, NavItem, NavLink, Nav, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
export default function List() {
    const [modal, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            lidt
            <Navbar expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}
