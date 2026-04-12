import { ComponentMetadata } from './types/component-metadata';

export function findComponent(
    components: ComponentMetadata[],
    nameOrId: string
): ComponentMetadata | undefined {
    const lower = nameOrId.toLowerCase();

    // Exact match on id
    const byId = components.find((c) => c.id === lower);
    if (byId) return byId;

    // Exact match on baseClass
    const byClass = components.find((c) => c.baseClass === lower || c.baseClass === `fd-${lower}`);
    if (byClass) return byClass;

    // Exact match on name
    const byName = components.find((c) => c.name.toLowerCase() === lower);
    if (byName) return byName;

    // Partial match on id
    const byPartialId = components.find((c) => c.id.includes(lower));
    if (byPartialId) return byPartialId;

    // Partial match on name
    const byPartialName = components.find((c) => c.name.toLowerCase().includes(lower));
    if (byPartialName) return byPartialName;

    return undefined;
}

export function scoreMatch(component: ComponentMetadata, query: string): number {
    let score = 0;

    if (component.id === query) score += 100;
    else if (component.id.includes(query)) score += 50;

    if (component.baseClass === query || component.baseClass === `fd-${query}`) score += 90;
    else if (component.baseClass.includes(query)) score += 40;

    if (component.name.toLowerCase() === query) score += 80;
    else if (component.name.toLowerCase().includes(query)) score += 35;

    if (component.description.toLowerCase().includes(query)) score += 20;
    if (component.category?.toLowerCase().includes(query)) score += 30;

    // Search in modifiers
    for (const mod of component.modifiers) {
        if (mod.class.toLowerCase().includes(query)) { score += 15; break; }
    }

    // Search in elements
    for (const el of component.elements) {
        if (el.class.toLowerCase().includes(query)) { score += 10; break; }
    }

    // Search in variables
    for (const v of component.variables) {
        if (v.toLowerCase().includes(query)) { score += 10; break; }
    }

    return score;
}

export function truncate(text: string, maxLength: number): string {
    if (!text) return '';
    const firstLine = text.split('\n')[0];
    if (firstLine.length <= maxLength) return firstLine;
    return firstLine.slice(0, maxLength - 3) + '...';
}
