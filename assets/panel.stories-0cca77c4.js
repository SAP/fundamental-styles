/* empty css               *//* empty css             *//* empty css              *//* empty css                         *//* empty css                */const u=`<div class="fd-panel fd-panel--transparent" aria-labelledby="__panel-title-4" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button onclick="toggleExpandedButton(event)" class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-4">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-4">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="__panel-title-4" class="fd-panel__content" aria-hidden="false" id="__panel-4">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<br><br>

<div class="fd-panel fd-panel--transparent" aria-labelledby="__panel-title-5" role="form">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title" id="__panel-title-5">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
              <button class="fd-button" aria-pressed="false">Middle</button>
              <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-5" class="fd-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
`,l=`<div class="fd-panel fd-panel--borderless" aria-labelledby="__panel-title-1" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" onclick="toggleExpandedButton(event)"
                aria-expanded="false" aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-1">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-1">Panel header collapsed</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
              <button class="fd-button" aria-pressed="false">Middle</button>
              <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-1" class="fd-panel__content" aria-hidden="true" id="__panel-1">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<br><br>

<div class="fd-panel fd-panel--borderless" aria-labelledby="__panel-title-2" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true" onclick="toggleExpandedButton(event)"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-2">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-2">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="__panel-title-2" class="fd-panel__content" aria-hidden="false" id="__panel-2">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<br><br>

<div class="fd-panel fd-panel--fixed fd-panel--borderless" aria-labelledby="__panel-title-3" role="form">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title" id="__panel-title-3">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
              <button class="fd-button" aria-pressed="false">Middle</button>
              <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-3" class="fd-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
`,o=`<div class="fd-panel" aria-labelledby="__panel-title-fixed" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true" onclick="toggleExpandedButton(event)"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-fixed">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-fixed">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="__panel-title-fixed" class="fd-panel__content" aria-hidden="false" id="__panel-fixed" style="height: 150px;">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed temporibus dolorum cupiditate recusandae quaerat aperiam facilis provident nemo nostrum porro corporis nesciunt ducimus, ad molestias adipisci soluta iure quam repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat temporibus, eveniet modi nobis inventore debitis explicabo consectetur, sunt fugit suscipit dolore ab et ullam natus, in molestiae deserunt. Aperiam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eveniet consequatur quis dolores, voluptatem et! Odit laboriosam, ducimus accusantium autem minus maxime excepturi, voluptatibus delectus sint animi soluta incidunt officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis fuga aspernatur dolore numquam culpa quos perspiciatis nobis ipsum soluta nostrum, consequatur ab, asperiores minus eum labore inventore maxime tempore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, deserunt nisi veritatis omnis corrupti id esse minus. Repellat cum maxime, ipsam quia voluptate doloremque similique esse rerum animi provident quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo non perferendis odit necessitatibus eius dolorum nam dolor neque sed. Dolores obcaecati facilis voluptate temporibus eaque saepe reprehenderit, voluptatum repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus repellendus nulla aliquam eos officiis molestias doloribus magnam, ullam sunt, explicabo similique delectus voluptatum laudantium doloremque at cum non esse! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iusto odit saepe. Delectus optio reiciendis quia unde est excepturi blanditiis, nisi sed voluptatem obcaecati commodi illum dolorem architecto in officia! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed temporibus dolorum cupiditate recusandae quaerat aperiam facilis provident nemo nostrum porro corporis nesciunt ducimus, ad molestias adipisci soluta iure quam repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat temporibus, eveniet modi nobis inventore debitis explicabo consectetur, sunt fugit suscipit dolore ab et ullam natus, in molestiae deserunt. Aperiam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eveniet consequatur quis dolores, voluptatem et! Odit laboriosam, ducimus accusantium autem minus maxime excepturi, voluptatibus delectus sint animi soluta incidunt officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis fuga aspernatur dolore numquam culpa quos perspiciatis nobis ipsum soluta nostrum, consequatur ab, asperiores minus eum labore inventore maxime tempore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, deserunt nisi veritatis omnis corrupti id esse minus. Repellat cum maxime, ipsam quia voluptate doloremque similique esse rerum animi provident quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo non perferendis odit necessitatibus eius dolorum nam dolor neque sed. Dolores obcaecati facilis voluptate temporibus eaque saepe reprehenderit, voluptatum repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus repellendus nulla aliquam eos officiis molestias doloribus magnam, ullam sunt, explicabo similique delectus voluptatum laudantium doloremque at cum non esse! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iusto odit saepe. Delectus optio reiciendis quia unde est excepturi blanditiis, nisi sed voluptatem obcaecati commodi illum dolorem architecto in officia!
        </span>
    </div>
</div>
`,r=`<div class="fd-panel" aria-labelledby="__panel-title-7" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" onclick="toggleExpandedButton(event)"
                aria-expanded="false" aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-7">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-7">Panel header collapsed</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
              <button class="fd-button" aria-pressed="false">Middle</button>
              <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-7" class="fd-panel__content" aria-hidden="true" id="__panel-7">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<div class="fd-panel" aria-labelledby="__panel-title-8" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true" onclick="toggleExpandedButton(event)"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-8">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-8">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="__panel-title-8" class="fd-panel__content" aria-hidden="false" id="__panel-8">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>
`,d=`<div class="fd-panel" aria-labelledby="__panel-title-6" role="form">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title" id="__panel-title-6">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
              <button class="fd-button" aria-pressed="false">Middle</button>
              <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-6" class="fd-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
`,c=`<div style="height: 200px; position: relative; overflow: scroll;">
    <div class="fd-panel fd-panel--sticky" aria-labelledby="__panel-title-sticky" role="form">
        <div class="fd-panel__header">
            <div class="fd-panel__expand">
                <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true" onclick="toggleExpandedButton(event)"
                    aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-sticky">
                    <i class="sap-icon--slim-arrow-down"></i>
                </button>
            </div>
            <h4 class="fd-panel__title" id="__panel-title-sticky">Panel sticky header</h4>
        </div>
        <div role="region" aria-labelledby="__panel-title-sticky" class="fd-panel__content" aria-hidden="false" id="__panel-sticky">
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
               
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
               
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            </span>
        </div>
    </div>    
</div>
`,f={title:"Components/Panel",parameters:{description:`
The panel is a container for grouping and displaying information. Panels are responsive and can be collapsed to save additional screen space.

##Usage
**Use the panel if:**

- You need to group or display information.
- You want to give users the option to hide this information.
- You want to show additional information on demand (for example, a panel could show optional input fields for an advanced search).


**Do not use the panel in:**

- The content area of a **Dynamic Page**.


##Types
There are two types of panels: fixed and expandable.

  `}},i=()=>d;i.parameters={docs:{description:{story:`
        `}}};const t=()=>r;t.parameters={docs:{description:{story:`Expandable panels are much like fixed panels, except their content can be expanded and collapsed (including the info toolbar, if available).
        `}}};const e=()=>o;e.storyName="Fixed height";e.parameters={docs:{description:{story:`When the height of the panel's content is set to a fixed size, the content area becomes scrollable.
        `}}};const a=()=>l;a.parameters={docs:{description:{story:"Panel may have a border or not. For Panel without border use the `.fd-panel--borderless ` modifier class.\n        "}}};const s=()=>u;s.parameters={docs:{description:{story:"The background of the content can be set to transparent by applying the `.fd-panel--transparent ` modifier class.\n        "}}};const n=()=>c;n.parameters={docs:{description:{story:"Sticky header can be achieved by applying the `.fd-panel--sticky ` modifier class to the panel. The container should have a fixed height, position relative and overflow-y set to scroll."}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => fixedExampleHtml",...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => expandableExampleHtml",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => fixedHeightContentExampleHtml",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => borderlessExampleHtml",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => transparentExampleHtml",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => stickyHeaderExampleHtml",...n.parameters?.docs?.source}}};const _=["Fixed","Expandable","FixedHeightContent","Borderless","Transparent","StickyHeader"];export{a as Borderless,t as Expandable,i as Fixed,e as FixedHeightContent,n as StickyHeader,s as Transparent,_ as __namedExportsOrder,f as default};
