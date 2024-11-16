const useWhatsApp = () => {
  /** Function to redirect the user to whatsapp */
  const handleRedirectTheUserToWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=+917008345662&text=Hi, I got to know about Holiday Planner, I'm interested to know more about services you offer.`,
      '_blank'
    );
  };

  return {
    handleRedirectTheUserToWhatsApp,
  };
};

export default useWhatsApp;
