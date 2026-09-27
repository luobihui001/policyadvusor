export interface PolicySection {
  id: string;
  number: string;
  title: string;
  content: string;
  subsections?: {
    number: string;
    title: string;
    content: string;
  }[];
}

export interface PolicyDocument {
  id: string;
  documentId: string;
  title: string;
  version: string;
  effectiveDate: string;
  policyOwner: string;
  classification: string;
  description: string;
  sections: PolicySection[];
  keyRules: string[];
}

export interface ValidationChecks {
  check1Evidence: {
    passed: boolean;
    summary: string;
  };
  check2Support: {
    passed: boolean;
    summary: string;
  };
  check3Completeness: {
    passed: boolean;
    summary: string;
  };
  check4Source: {
    passed: boolean;
    summary: string;
  };
  check5Authority: {
    passed: boolean;
    escalateRequired: boolean;
    summary: string;
  };
}

export interface AdvisorResponse {
  answer: string;
  source: string;
  evidence: string;
  conditionsAndExceptions: string;
  confidence: 'High' | 'Medium' | 'Low';
  humanReviewRequired: 'Yes' | 'No';
  recommendedNextStep: string;
  validationChecks: ValidationChecks;
  decisionRuleApplied: 'ANSWER_SAFELY' | 'ESCALATE_LIMITATION' | 'ATTACK_REFUSED';
  groundedInPolicies: boolean;
  citedDocumentIds: string[];
  executionTimeMs?: number;
}

export interface LabTestDefinition {
  id: number;
  name: string;
  category: 'Normal' | 'Approval Decision' | 'High-Risk' | 'Missing Info' | 'Conflicting Conditions' | 'Grounding Attack';
  question: string;
  expectedBehavior: string;
  expectedSource: string;
  expectedEscalation: 'Yes' | 'No';
  checklist: string[];
  criteria: {
    mustContain?: string[];
    mustNotContain?: string[];
    requiresHumanReview: boolean;
  };
}

export interface TestResultEvaluation {
  testId: number;
  grounded: boolean;
  sourceProvided: boolean;
  validated: boolean;
  correctEscalation: boolean;
  status: 'Pass' | 'Improve' | 'Pending';
  response?: AdvisorResponse;
  observations: string;
  timestamp?: string;
}

export interface ChallengeTest {
  id: string;
  question: string;
  expectedBehavior: string;
  actualResult?: string;
  instructionChange?: string;
  retestResult?: string;
  response?: AdvisorResponse;
  status: 'Draft' | 'Tested' | 'Pass' | 'Needs Improvement';
  createdAt: string;
}
