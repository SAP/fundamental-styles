class ThemeManager {
    constructor() {
        this.cssVariablesFileName = 'css_variables.css';
        this.cssVariablesPath = '/Base/baseLib/';
        this.sapThemeUrlParameter = this.getUrlParameter('sap-theme');
        this.themeRoot = this.determineThemeRoot(this.sapThemeUrlParameter);
        this.themeId = this.determineThemeId(this.sapThemeUrlParameter);
        this.cssVariablesUrl = this.determineCssVariablesUrl();
    }

    determineThemeRoot(sapThemeUrlParameter) {
        let values = sapThemeUrlParameter.split('@');
        let themeRoot = values.length > 1 ? values[1] : '';
        return themeRoot;
    }

    determineThemeId(sapThemeUrlParameter) {
        let values = sapThemeUrlParameter.split('@');
        let themeId = values.length > 0 ? values[0] : 'sap_horizon';
        return themeId;
    }

    determineCssVariablesUrl() {
        let cssVariablesUrl = this.pathJoin(this.themeRoot, this.cssVariablesPath, this.themeId, this.cssVariablesFileName);
        return cssVariablesUrl;
    }

    pathJoin(...parts) {
        let joinedPath = '';
        parts.map((part, index) => {
            let partToAdd;
            if (joinedPath.endsWith('/') && part.startsWith('/')) {
                partToAdd = part.substr(1);
            } else {
                partToAdd = part;
            }
            joinedPath = joinedPath + partToAdd;
            if (!joinedPath.endsWith('/') && index !== parts.length - 1) {
                joinedPath += '/';
            }
        });
        return joinedPath;
    }

    getUrlParameter(parameterName) {
        var params = document.location.search.substring(1).split('&');
        for (var i = 0; i < params.length; i++) {
            var param = params[i].split('=');
            if (param[0] === parameterName) {
                return encodeURI(decodeURIComponent(param[1]));
            }
        }
        return '';
    }

    addCssVariables() {
        var styleSheet = document.createElement('link');
        styleSheet.rel = 'stylesheet';
        styleSheet.href = this.cssVariablesUrl;
        document.head.appendChild(styleSheet);
    }
}

(function() {
    let themeManager = new ThemeManager();
    themeManager.addCssVariables();
})();
