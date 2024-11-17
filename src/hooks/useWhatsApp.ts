const useWhatsApp = () => {
  /** Function to redirect the user to whatsapp */
  const handleRedirectTheUserToWhatsApp = ({
    messageType = 'generic',
    dynamicMessage = '',
  }: {
    messageType: string;
    dynamicMessage?: string;
  }) => {
    let message = '';
    if (messageType === 'generic') {
      message =
        "Hi, I got to know about Holiday Planner, I'm interested to know more about services you offer.";
    } else {
      message = dynamicMessage;
    }

    window.open(
      `https://api.whatsapp.com/send?phone=+918249262728&text=${encodeURIComponent(
        message
      )}`,
      '_blank'
    );
  };

  return {
    handleRedirectTheUserToWhatsApp,
  };
};

export default useWhatsApp;
