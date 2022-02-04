export default {
    title: 'Experimental/Dropdown',
    parameters: {
        components: ['fn-dropdown']
    }
};

export const Dropdown = () => `
<div style="display: flex; justify-content: space-between;">
    <div class="fn-dropdown"></div>
    <div class="fn-dropdown fn-dropdown--overflow-y" style="max-width: 16rem; max-height: 18rem;">
        <p style="padding: 0 0.5rem;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
    </div>
</div>
`;

Dropdown.parameters = {
    docs: {
        description: {
            story: 'The modifier class `.fn-dropdown--overflow-y` will clip the content and add a vertical scroll to the element. You need to manually set the max-height and max-width of the element on the `.fn-dropdown` level. For example: `style="max-width: 16rem; max-height: 18rem;"`'
        }
    }
};
