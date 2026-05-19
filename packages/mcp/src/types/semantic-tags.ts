/**
 * Semantic tags for component search and discovery
 */

export interface SemanticTags {
  patterns: string[];
  useCases: string[];
  synonyms: string[];
  categories: string[];
  compositionContext: string[];
}

export interface SemanticTagsFile {
  version: string;
  description: string;
  generatedBy: string;
  components: Record<string, SemanticTags>;
}
