export const profile = {
  name: 'Sri Adithya Sridhar',
  role: 'Cloud & DevOps Engineer',
  location: 'Germany',
  tagline:
    'I design, automate, and operate cloud infrastructure — from CI/CD pipelines and container platforms to observability and IaC at scale.',
  email: 'sri.adithya.sridhar@example.com',
  github: 'https://github.com/sri-adithya',
  linkedin: 'https://www.linkedin.com/in/sri-adithya-sridhar',
};

export const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

// Cloud platforms / core tech surfaced on the hero
export const heroBadges = [
  { label: 'AWS', short: 'aws' },
  { label: 'Azure', short: 'azure' },
  { label: 'Docker', short: 'docker' },
  { label: 'Kubernetes', short: 'k8s' },
  { label: 'Terraform', short: 'terraform' },
];

// Infrastructure overview stats
export const stats = [
  { label: 'Years in DevOps', value: '4+' },
  { label: 'Production clusters', value: '12' },
  { label: 'Pipelines maintained', value: '50+' },
  { label: 'Cloud providers', value: 'AWS · Azure · GCP' },
];

export const capabilities = [
  {
    title: 'CI/CD pipelines',
    body:
      'Design GitHub Actions, GitLab CI, and Jenkins pipelines with multi-stage builds, artifact signing, security scans, and progressive rollouts.',
  },
  {
    title: 'Containers & orchestration',
    body:
      'Build hardened OCI images and operate production Kubernetes on EKS, AKS, and self-managed clusters with Helm and Argo CD.',
  },
  {
    title: 'Cloud deployment',
    body:
      'Provision multi-account AWS / Azure landing zones, VPCs, IAM boundaries, and managed services with least-privilege defaults.',
  },
  {
    title: 'Automation & SRE',
    body:
      'Replace toil with Python / Bash tooling, GitOps workflows, runbooks, and SLOs that hold engineers accountable to user-facing reliability.',
  },
];

// Skills matrix — 4 groups
export const skillsMatrix = [
  {
    group: 'Cloud Platforms',
    items: ['AWS (EKS, ECS, Lambda, RDS, S3, IAM)', 'Microsoft Azure (AKS, Functions, AAD)', 'Google Cloud (GKE, Cloud Run)'],
  },
  {
    group: 'DevOps Tools',
    items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Argo CD', 'Helm', 'Docker', 'Kubernetes'],
  },
  {
    group: 'Infrastructure as Code',
    items: ['Terraform', 'Terragrunt', 'AWS CloudFormation', 'Ansible', 'Pulumi'],
  },
  {
    group: 'Monitoring & Logging',
    items: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager', 'ELK Stack', 'Datadog', 'OpenTelemetry'],
  },
];

// Detailed DevOps projects
export const projects = [
  {
    id: 'cicd',
    title: 'CI/CD Pipeline — GitHub Actions + Docker',
    summary:
      'End-to-end delivery pipeline for a Node.js + React monorepo: lint, test, build, scan, sign, and deploy to staging on every PR.',
    architecture:
      'PR triggers a matrix workflow that runs unit + integration tests in parallel. On main, the workflow builds multi-arch Docker images, pushes them to ECR with immutable tags, and triggers a release job that updates the GitOps repo consumed by Argo CD.',
    tools: ['GitHub Actions', 'Docker Buildx', 'Trivy', 'Cosign', 'AWS ECR', 'Argo CD'],
    flow: [
      'Pull request → lint, unit & integration tests (matrix)',
      'Merge to main → multi-arch build with Docker Buildx',
      'Trivy scan + Cosign signature pushed to ECR',
      'Bot updates GitOps repo → Argo CD syncs to staging',
    ],
  },
  {
    id: 'k8s-aws',
    title: 'Kubernetes Deployment on AWS (EKS)',
    summary:
      'Production-grade EKS platform hosting 30+ microservices with autoscaling, network policies, and zero-downtime rollouts.',
    architecture:
      'Three-AZ EKS cluster with managed node groups for system workloads and Karpenter-provisioned spot nodes for application workloads. AWS Load Balancer Controller fronts ingress; ExternalDNS manages Route 53 records; cert-manager issues ACM-rooted certificates.',
    tools: ['Amazon EKS', 'Karpenter', 'Helm', 'AWS Load Balancer Controller', 'ExternalDNS', 'cert-manager'],
    flow: [
      'Service repo merged → image published to ECR',
      'Helm chart bumped in GitOps repo',
      'Argo CD reconciles → rolling deploy with PodDisruptionBudgets',
      'Karpenter scales node capacity to match pod demand',
    ],
  },
  {
    id: 'terraform',
    title: 'Infrastructure Provisioning with Terraform',
    summary:
      'Multi-account AWS landing zone provisioned with Terraform + Terragrunt — VPCs, IAM, EKS, RDS, and observability stack as reusable modules.',
    architecture:
      'Root module composes per-environment stacks (dev, stage, prod) using Terragrunt to inject account IDs and region config. State stored in encrypted S3 with DynamoDB locking. Drift detection runs nightly via GitHub Actions and posts a diff comment on the infra repo.',
    tools: ['Terraform', 'Terragrunt', 'AWS Organizations', 'S3 + DynamoDB backend', 'tflint', 'Checkov'],
    flow: [
      'Engineer opens PR → tflint + Checkov + terraform plan in CI',
      'Plan posted as PR comment for review',
      'Merge → terraform apply via OIDC-authenticated runner',
      'Nightly drift detection job reports unexpected changes',
    ],
  },
  {
    id: 'monitoring',
    title: 'Monitoring Stack — Prometheus + Grafana',
    summary:
      'Cluster-wide observability with Prometheus for metrics, Loki for logs, and Grafana for dashboards + SLO burn-rate alerting.',
    architecture:
      'kube-prometheus-stack deployed via Helm with remote_write to long-term Thanos storage on S3. Loki ingests container logs through Promtail. Alertmanager routes by severity to PagerDuty, Slack, and email. SLO dashboards built on multi-window, multi-burn-rate queries.',
    tools: ['Prometheus', 'Thanos', 'Grafana', 'Loki', 'Promtail', 'Alertmanager', 'PagerDuty'],
    flow: [
      'Workloads expose /metrics → Prometheus scrape',
      'Long-term metrics pushed to Thanos on S3',
      'Loki ingests logs via Promtail DaemonSet',
      'Burn-rate alerts → Alertmanager → PagerDuty / Slack',
    ],
  },
];

// Architecture diagram placeholders
export const diagrams = [
  {
    title: 'CI/CD Reference Pipeline',
    caption: 'GitHub → Actions → ECR → Argo CD → EKS',
    legend: ['source', 'build', 'registry', 'gitops', 'runtime'],
  },
  {
    title: 'EKS Multi-AZ Topology',
    caption: 'Karpenter-driven autoscaling across 3 availability zones',
    legend: ['vpc', 'subnet', 'eks', 'karpenter', 'alb'],
  },
  {
    title: 'Observability Stack',
    caption: 'Prometheus + Thanos + Loki + Grafana',
    legend: ['scrape', 'remote-write', 'storage', 'query', 'alert'],
  },
];

// GitHub repos
export const repos = [
  {
    name: 'terraform-aws-landing-zone',
    description: 'Opinionated multi-account AWS landing zone modules.',
    language: 'HCL',
    href: 'https://github.com/sri-adithya/terraform-aws-landing-zone',
  },
  {
    name: 'eks-platform-bootstrap',
    description: 'Helm + Argo CD bootstrap for production-grade EKS clusters.',
    language: 'YAML',
    href: 'https://github.com/sri-adithya/eks-platform-bootstrap',
  },
  {
    name: 'github-actions-pipelines',
    description: 'Reusable GitHub Actions workflows for Docker, Node, and Python services.',
    language: 'YAML',
    href: 'https://github.com/sri-adithya/github-actions-pipelines',
  },
  {
    name: 'prometheus-slo-dashboards',
    description: 'Grafana dashboards and recording rules for multi-burn-rate SLOs.',
    language: 'Jsonnet',
    href: 'https://github.com/sri-adithya/prometheus-slo-dashboards',
  },
];
