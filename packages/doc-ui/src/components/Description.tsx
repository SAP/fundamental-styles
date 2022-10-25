import Markdowndown from 'markdown-to-jsx';

const Description = ({desc}: { desc?: string }) => {
    if (desc) {
        return (
            <Markdowndown options={{forceBlock: true}}>{desc}</Markdowndown>
        )
    }
    return null;
}

Description.displayName = 'Description';

export default Description;
