import '../../dist/form-label.css';
import '../../dist/form-item.css';
import '../../dist/input.css';
import '../../dist/popover.css';
import '../../dist/input-group.css';

export default {
    title: 'Components/Forms/Input Group',
    parameters: {
        description: 'Testing Part only'
    }
};

export const one = () => `
<div class="fd-input-group  ">
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon ">
   km/h
   </span>
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon ">
   .00
   </span>
</div>
<br />
<div class="fd-input-group  ">
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
   <span class="fd-input-group__addon ">
   km/h
   </span>
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
   <span class="fd-input-group__addon ">
   .00
   </span>
</div>
<br />
<div class="fd-input-group   is-disabled">
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon ">
   km/h
   </span>
</div>
<br />
<div class="fd-input-group   is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group   is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon ">
   .00
   </span>
</div>
<br />
<div class="fd-input-group   is-disabled">
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
   <span class="fd-input-group__addon ">
   km/h
   </span>
</div>
<br />
<div class="fd-input-group   is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group   is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
   <span class="fd-input-group__addon ">
   .00
   </span>
</div>
`;

one.parameters = {
    docs: {
        disable: true
    }
};

export const two = () => `
<div class="fd-input-group  ">
   <input class="input-group-input-playground input-group-input-playground--compact fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon fd-input-group__addon--compact">
   km/h
   </span>
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  fd-input-group__addon--compact">
   $
   </span>
   <input class="input-group-input-playground input-group-input-playground--compact fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  ">
   <span class="fd-input-group__addon  fd-input-group__addon--compact">
   $
   </span>
   <input class="input-group-input-playground input-group-input-playground--compact fd-input-group__input" placeholder="" value="19387309" />
   <span class="fd-input-group__addon fd-input-group__addon--compact">
   .00
   </span>
</div>
`;

two.parameters = {
    docs: {
        disable: true
    }
};
export const three = () => `
<div class="fd-input-group  is-success ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-success ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-success  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-success  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-error ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-error ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-error  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-error  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-warning ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-warning ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-warning  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-warning  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-information ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-information ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-information  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-information  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
`;

three.parameters = {
    docs: {
        disable: true
    }
};
export const four = () => `
<div class="fd-input-group  ">
        <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />
                
<div class="fd-input-group  ">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
                <br />
                
<div class="fd-input-group  ">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />
                
<div class="fd-input-group  ">
        <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />
                
<div class="fd-input-group  ">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
                <br />
                
<div class="fd-input-group  ">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />
        <h3>Disabled</h3>
                
<div class="fd-input-group   is-disabled">
        <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />
                
<div class="fd-input-group   is-disabled">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
                <br />
                
<div class="fd-input-group   is-disabled">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />
                
<div class="fd-input-group   is-disabled">
        <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
                <br />
                
<div class="fd-input-group   is-disabled">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
                <br />
                
<div class="fd-input-group   is-disabled">
        <span class="fd-input-group__addon fd-input-group__addon--button  ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
        <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
        <span class="fd-input-group__addon fd-input-group__addon--button ">
                    <button class="btn-playground fd-input-group__button">Click Me</button>

        </span>
</div>
`;

four.parameters = {
    docs: {
        disable: true
    }
};
export const five = () => `
<div class="fd-input-group  is-success ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-success ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-success  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-success  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-error ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-error ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-error  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-error  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-warning ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-warning ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-warning  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-warning  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-information ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-information ">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
<br />
<div class="fd-input-group  is-information  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309" />
</div>
<br />
<div class="fd-input-group  is-information  is-disabled">
   <span class="fd-input-group__addon  ">
   $
   </span>
   <textarea class="input-group-input-playground  fd-input-group__input" placeholder="" value="19387309"></textarea>
</div>
`;

five.parameters = {
    docs: {
        disable: true
    }
};
export const six = () => `
<div class="fd-input-group fd-input-group--inline  ">
   <span class="fd-input-group__addon  ">
   phone
   </span>
   <input class="input-group-input-playground  fd-input-group__input" placeholder="Field placeholder text" value="" />
</div>
<div class="fd-input-group fd-input-group--inline  ">
   <input class="input-group-input-playground  fd-input-group__input" placeholder="Field placeholder text" value="" />
   <span class="fd-input-group__addon ">
   fax
   </span>
</div>
`;

six.parameters = {
    docs: {
        disable: true
    }
};
