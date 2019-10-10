import Button from '@material-ui/core/Button';

const ButtonElement = (props) => {
  const { text } = props;
  return (
    <Button>
      {text}
    </Button>
  );
};

export default ButtonElement;
