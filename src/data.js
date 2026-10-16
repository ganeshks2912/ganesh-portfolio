// Edit your content here. Replace the GitHub / LinkedIn URLs with your own.
export const profile = {
  name: 'Ganesh K S',
  email: 'ganeshks2912@gmail.com',
  phone: '+91 8618687728',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
  objective:
    'Rooted in DSA and fluent in Java and C++, I build full-stack systems that stay fast, secure and standing when traffic spikes.',
};

export const projects = [
  {
    n: '01', image: '/images/nexus.webp', repo: 'https://github.com/ganeshks2912/nexus_api', title: 'Nexus APIs', sub: 'Multi-Tenant API Gateway & Management Platform', tag: 'Platform Engineering',
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'JWT', 'React.js'],
    points: [
      'Architected a multi-tenant SaaS platform with shared-database tenant isolation, organization management and RBAC for Owner, Admin, Developer and Viewer roles.',
      'Implemented JWT authentication with refresh token rotation, password hashing and tenant-aware authorization for protected REST APIs.',
      'Built an API Gateway with request routing, header/query/body forwarding, API key authentication and backend service integration.',
      'Designed API key management with hashed storage, revocation, expiration handling and tenant-level access control.',
      'Engineered Redis sliding-window rate limiting with configurable quotas and analytics on usage, response times and request outcomes.',
    ],
  },
  {
    n: '02', image: '/images/notification.webp', repo: 'https://github.com/ganeshks2912/distribution_notification_system', title: 'Distributed Notification Delivery Platform', sub: 'Email & SMS delivery at scale', tag: 'Backend Systems',
    stack: ['Node.js', 'Express.js', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Docker'],
    points: [
      'Designed a distributed notification platform for Email and SMS with a focus on scalability and reliability.',
      'Implemented RabbitMQ asynchronous processing with priority queues, retry mechanisms and dead letter queues for fault-tolerant delivery.',
      'Built scheduled workflows, delivery status tracking, rate limiting and idempotency controls for high-throughput workloads.',
      'Developed a template management system for customizable notification content.',
    ],
  },
  {
    n: '03', image: '/images/ailog.webp', repo: 'https://github.com/ganeshks2912/ai_log_analysis', title: 'AI Log Intelligence', sub: 'Bot vs. human traffic detection', tag: 'Machine Learning',
    stack: ['Python', 'Random Forest', 'React', 'PostgreSQL'],
    points: [
      'Developed an ML-based system using a Random Forest classifier to analyze server logs and identify potential bots based on extracted behavioral features.',
      'Integrated behavioral risk scoring, real-time alert management and incident tracking to detect suspicious activity and manage alerts through Open, Investigating and Resolved states.',
      'Built an interactive React dashboard with detection trends, human-versus-bot statistics, risk levels and model performance metrics for monitoring suspicious traffic.',
    ],
  },
];

export const skills = [
  { t: 'Languages', i: ['Java', 'C++', 'JavaScript', 'SQL'] },
  { t: 'Frontend', i: ['HTML', 'CSS', 'React.js'] },
  { t: 'Backend', i: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC'] },
  { t: 'Data & Messaging', i: ['PostgreSQL', 'Redis', 'RabbitMQ'] },
  { t: 'Dev Tools', i: ['Git', 'GitHub', 'Docker', 'Postman'] },
  { t: 'Architecture', i: ['Distributed Systems', 'Multi-Tenancy', 'API Gateway Design', 'Rate Limiting', 'API Key Management', 'AuthN & AuthZ'] },
  { t: 'CS Fundamentals', i: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks'] },
];

export const education = [
  { y: '2027', t: 'B.E. Computer Science & Engineering', s: 'Dayananda Sagar Academy of Technology and Management', d: 'IoT and Cyber Security including Blockchain · CGPA 9.27 · Currently up to 6th semester' },
  { y: '2023', t: '12th Grade (PUC)', s: 'Sri Chaitanya PU College', d: '91%' },
  { y: '2021', t: '10th Grade (ICSE)', s: 'Clarence Public School', d: '95.4%' },
];

export const activities = [
  'Organized the TechFusion Hackathon as a core member of the Oculus Aegis Club, coordinating event operations and participant management.',
];
