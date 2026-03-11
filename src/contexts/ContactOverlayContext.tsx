import { createContext, useContext, useState, ReactNode } from "react";

interface ContactOverlayContextType {
  contactOpen: boolean;
  setContactOpen: (open: boolean) => void;
}

const ContactOverlayContext = createContext<ContactOverlayContextType>({
  contactOpen: false,
  setContactOpen: () => {},
});

export const useContactOverlay = () => useContext(ContactOverlayContext);

export const ContactOverlayProvider = ({ children }: { children: ReactNode }) => {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <ContactOverlayContext.Provider value={{ contactOpen, setContactOpen }}>
      {children}
    </ContactOverlayContext.Provider>
  );
};
