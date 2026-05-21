/**
 * Component dependency graph for smart CSS dependency detection
 * Maps components to their required CSS files and common companion components
 */

export interface ComponentDependency {
    required: string[];
    commonlyUsedWith?: Record<string, {
        additional: string[];
        reason: string;
    }>;
    optionalEnhancements?: string[];
}

export interface DependencySuggestion {
    file: string;
    reason: string;
    category: 'required' | 'recommended' | 'optional';
}

export interface PatternDetection {
    name: string;
    confidence: number;
    suggestedDependencies: string[];
    reason: string;
    exampleId?: string;
}

/**
 * Comprehensive dependency map for all components
 */
export const COMPONENT_DEPENDENCIES: Record<string, ComponentDependency> = {
    // Overlays & Dialogs
    'dialog': {
        required: ['dialog.css', 'bar.css'],
        commonlyUsedWith: {
            'input': {
                additional: ['form-message.css', 'popover.css'],
                reason: 'Inline validation requires form-message and popover for error display'
            },
            'button': {
                additional: ['button.css'],
                reason: 'Dialog footer typically contains action buttons'
            },
            'title': {
                additional: ['title.css'],
                reason: 'Dialog header typically contains title'
            }
        },
        optionalEnhancements: ['icon.css', 'message-strip.css']
    },

    // Data Display
    'table': {
        required: ['table.css'],
        commonlyUsedWith: {
            'toolbar': {
                additional: ['toolbar.css', 'button.css', 'input.css'],
                reason: 'Tables typically have toolbars with search/filter/actions'
            },
            'object-status': {
                additional: ['object-status.css'],
                reason: 'Status cells commonly use object-status component'
            },
            'checkbox': {
                additional: ['checkbox.css'],
                reason: 'Row selection uses checkboxes'
            },
            'pagination': {
                additional: ['pagination.css'],
                reason: 'Large tables typically need pagination'
            }
        },
        optionalEnhancements: ['icon.css', 'button.css', 'link.css']
    },

    'list': {
        required: ['list.css'],
        commonlyUsedWith: {
            'avatar': {
                additional: ['avatar.css'],
                reason: 'List items with people/entities use avatars'
            },
            'icon': {
                additional: ['icon.css'],
                reason: 'Navigation lists use icons'
            },
            'object-status': {
                additional: ['object-status.css'],
                reason: 'List items often show status'
            },
            'checkbox': {
                additional: ['checkbox.css'],
                reason: 'Selectable lists use checkboxes'
            },
            'button': {
                additional: ['button.css'],
                reason: 'List items often have action buttons'
            }
        }
    },

    'card': {
        required: ['card.css'],
        commonlyUsedWith: {
            'title': {
                additional: ['title.css'],
                reason: 'Card headers typically contain titles'
            },
            'button': {
                additional: ['button.css'],
                reason: 'Card headers often contain action buttons'
            },
            'icon': {
                additional: ['icon.css'],
                reason: 'Cards commonly use icons for visual hierarchy'
            },
            'object-status': {
                additional: ['object-status.css'],
                reason: 'Cards often display status indicators'
            },
            'avatar': {
                additional: ['avatar.css'],
                reason: 'Cards with people/entities show avatars'
            }
        }
    },

    // Forms
    'input': {
        required: ['input.css', 'form-label.css', 'form-item.css'],
        commonlyUsedWith: {
            'button': {
                additional: ['button.css'],
                reason: 'Forms have submit buttons'
            },
            'message-strip': {
                additional: ['message-strip.css'],
                reason: 'Form-level error/success messages'
            },
            'form-message': {
                additional: ['form-message.css', 'popover.css'],
                reason: 'Field-level validation messages'
            }
        },
        optionalEnhancements: ['icon.css']
    },

    'checkbox': {
        required: ['checkbox.css'],
        commonlyUsedWith: {
            'form-item': {
                additional: ['form-item.css', 'form-label.css'],
                reason: 'Checkboxes in forms need form-item wrapper'
            }
        }
    },

    'radio': {
        required: ['radio.css'],
        commonlyUsedWith: {
            'form-item': {
                additional: ['form-item.css', 'form-label.css', 'fieldset.css'],
                reason: 'Radio groups need form-item wrapper and fieldset'
            }
        }
    },

    'select': {
        required: ['select.css'],
        commonlyUsedWith: {
            'form-item': {
                additional: ['form-item.css', 'form-label.css'],
                reason: 'Selects in forms need form-item wrapper'
            },
            'popover': {
                additional: ['popover.css', 'list.css'],
                reason: 'Select dropdown uses popover with list'
            }
        }
    },

    // Navigation
    'shellbar': {
        required: ['shellbar.css', 'button.css', 'icon.css'],
        commonlyUsedWith: {
            'side-nav': {
                additional: ['side-nav.css'],
                reason: 'Shellbar with side-nav uses fd-shellbar--side-nav variant'
            },
            'avatar': {
                additional: ['avatar.css'],
                reason: 'Shellbar user menu displays avatar'
            },
            'popover': {
                additional: ['popover.css', 'menu.css'],
                reason: 'Shellbar dropdowns use popover + menu'
            }
        }
    },

    'side-nav': {
        required: ['side-nav.css', 'icon.css'],
        commonlyUsedWith: {
            'shellbar': {
                additional: ['shellbar.css'],
                reason: 'Side-nav typically paired with shellbar'
            },
            'page': {
                additional: ['page.css'],
                reason: 'Navigation wraps main content in page component'
            }
        }
    },

    'menu': {
        required: ['menu.css'],
        commonlyUsedWith: {
            'popover': {
                additional: ['popover.css'],
                reason: 'Menus are typically displayed in popovers'
            },
            'icon': {
                additional: ['icon.css'],
                reason: 'Menu items often have icons'
            }
        }
    },

    'tabs': {
        required: ['tabs.css'],
        commonlyUsedWith: {
            'icon': {
                additional: ['icon.css'],
                reason: 'Tab labels often include icons'
            }
        }
    },

    // Feedback
    'message-strip': {
        required: ['message-strip.css'],
        commonlyUsedWith: {
            'icon': {
                additional: ['icon.css'],
                reason: 'Message strips use semantic icons'
            },
            'link': {
                additional: ['link.css'],
                reason: 'Message strips often contain action links'
            }
        }
    },

    'popover': {
        required: ['popover.css'],
        optionalEnhancements: ['icon.css']
    },

    // Layout
    'page': {
        required: ['page.css'],
        commonlyUsedWith: {
            'bar': {
                additional: ['bar.css'],
                reason: 'Pages typically have header and footer bars'
            },
            'title': {
                additional: ['title.css'],
                reason: 'Page headers contain titles'
            }
        }
    },

    'panel': {
        required: ['panel.css'],
        commonlyUsedWith: {
            'title': {
                additional: ['title.css'],
                reason: 'Panels typically have titles'
            }
        }
    }
};

/**
 * Detect UI patterns based on component combinations
 */
export function detectPatterns(components: string[]): PatternDetection[] {
    const patterns: PatternDetection[] = [];
    const compSet = new Set(components);

    // Form pattern
    if (compSet.has('input') || compSet.has('checkbox') || compSet.has('select') || compSet.has('radio')) {
        patterns.push({
            name: 'Form Pattern',
            confidence: 0.9,
            suggestedDependencies: ['button.css', 'message-strip.css', 'form-message.css', 'popover.css'],
            reason: 'Forms typically need buttons, error messages, and field validation',
            exampleId: 'form-login'
        });
    }

    // Form in Dialog
    if (compSet.has('dialog') && (compSet.has('input') || compSet.has('checkbox'))) {
        patterns.push({
            name: 'Form in Dialog',
            confidence: 0.95,
            suggestedDependencies: ['form-message.css', 'popover.css', 'message-strip.css', 'title.css'],
            reason: 'Dialog forms need validation messages, titles, and error feedback',
            exampleId: 'dialog-form'
        });
    }

    // Data Table pattern
    if (compSet.has('table')) {
        patterns.push({
            name: 'Data Table',
            confidence: 0.85,
            suggestedDependencies: ['toolbar.css', 'input.css', 'button.css', 'checkbox.css', 'object-status.css'],
            reason: 'Tables commonly have toolbar with search/filter, row selection, and status cells',
            exampleId: 'table-with-selection'
        });
    }

    // Navigation Layout
    if (compSet.has('shellbar') && compSet.has('side-nav')) {
        patterns.push({
            name: 'Navigation Layout',
            confidence: 0.95,
            suggestedDependencies: ['page.css', 'avatar.css', 'popover.css', 'menu.css'],
            reason: 'Navigation layouts need page wrapper, user avatar, and dropdown menus',
            exampleId: 'layout-navigation-shell'
        });
    }

    // Dashboard pattern
    if (compSet.has('card') && components.length >= 3) {
        patterns.push({
            name: 'Dashboard',
            confidence: 0.8,
            suggestedDependencies: ['title.css', 'object-status.css', 'icon.css'],
            reason: 'Dashboards with multiple cards typically use titles, status indicators, and icons',
            exampleId: 'layout-dashboard-grid'
        });
    }

    // Master-Detail pattern
    if (compSet.has('list') && (compSet.has('page') || compSet.has('panel'))) {
        patterns.push({
            name: 'Master-Detail',
            confidence: 0.85,
            suggestedDependencies: ['bar.css', 'button.css', 'avatar.css', 'icon.css'],
            reason: 'Master-detail layouts need bars for headers, buttons for actions, avatars for list items',
            exampleId: 'layout-master-detail'
        });
    }

    return patterns;
}

/**
 * Generate smart dependency suggestions based on selected components
 */
export function suggestDependencies(selectedComponents: string[]): {
    required: Set<string>;
    recommended: Map<string, string>;
    optional: Map<string, string>;
    patterns: PatternDetection[];
} {
    const required = new Set<string>();
    const recommended = new Map<string, string>();
    const optional = new Map<string, string>();

    // Add required CSS for each selected component
    for (const component of selectedComponents) {
        const deps = COMPONENT_DEPENDENCIES[component];
        if (!deps) continue;

        deps.required.forEach(css => required.add(css));

        // Add optional enhancements to optional list
        deps.optionalEnhancements?.forEach(css => {
            if (!required.has(css)) {
                optional.set(css, `Commonly used with ${component}`);
            }
        });
    }

    // Analyze component combinations
    for (let i = 0; i < selectedComponents.length; i++) {
        for (let j = i + 1; j < selectedComponents.length; j++) {
            const comp1 = selectedComponents[i];
            const comp2 = selectedComponents[j];

            const comp1Deps = COMPONENT_DEPENDENCIES[comp1];
            const comp2Deps = COMPONENT_DEPENDENCIES[comp2];

            // Check if comp1 commonly used with comp2
            if (comp1Deps?.commonlyUsedWith?.[comp2]) {
                const combo = comp1Deps.commonlyUsedWith[comp2];
                combo.additional.forEach(css => {
                    if (!required.has(css)) {
                        recommended.set(css, `${comp1} + ${comp2}: ${combo.reason}`);
                    }
                });
            }

            // Check reverse
            if (comp2Deps?.commonlyUsedWith?.[comp1]) {
                const combo = comp2Deps.commonlyUsedWith[comp1];
                combo.additional.forEach(css => {
                    if (!required.has(css)) {
                        recommended.set(css, `${comp2} + ${comp1}: ${combo.reason}`);
                    }
                });
            }
        }
    }

    // Detect patterns
    const patterns = detectPatterns(selectedComponents);
    for (const pattern of patterns) {
        pattern.suggestedDependencies.forEach(css => {
            if (!required.has(css) && !recommended.has(css)) {
                recommended.set(css, `Pattern: ${pattern.name} - ${pattern.reason}`);
            }
        });
    }

    return { required, recommended, optional, patterns };
}
