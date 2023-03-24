# Ecomm

Projeto de Ecommerce criado durante o programa LevelUp da Alura

## Table of contents

- [Twelve-Factor App](#twelve-factor-app)
- [Microservices Patterns](#microservices-patterns)
- [Microservices Aspects](#microservices-aspects)

## Twelve-Factor App

| Factor | Description | Status |
|--------|-------------|--------|
| 1. Codebase | One codebase tracked in revision control, many deploys | ✔ |
| 2. Dependencies | Explicitly declare and isolate dependencies | ✔ |
| 3. Config | Store config in the environment | ✔ |
| 4. Backing services | Treat backing services as attached resources | ✔ |
| 5. Build, release, run | Strictly separate build and run stages | ✔ |
| 6. Processes | Execute the app as one or more stateless processes | ✔ |
| 7. Port binding | Export services via port binding | ✔ |
| 8. Concurrency | Scale out via the process model | ❌ |
| 9. Disposability | Maximize robustness with fast startup and graceful shutdown | ✔ |
| 10. Dev/prod parity | Keep development, staging, and production as similar as possible | ✔ |
| 11. Logs | Treat logs as event streams | ✔ |
| 12. Admin processes | Run admin/management tasks as one-off processes | ✔ |

[⬆ Back to top](#ecomm)

## Microservices Patterns

| Pattern | Applicable |
|---------|------------|
| Domain Services | Yes |
| Business Services | Yes |
| API Gateway | Yes |
| Process Aggregator | Yes |
| Edge Services | Yes |
| Single DB vs Multiple DBs | Yes, Multiple DBs |
| Asynchronous Events‌ | Yes |
| Log Aggregation | Yes |
| Metrics Aggregation | Yes |

[⬆ Back to top](#ecomm)

## Microservices Aspects

- [Standardization of the service stacks](#standardization-of-the-service-stacks)
- [Service discovery solution](#service-discovery-solution)
- [Security aspects](#security-aspects)
- [Technologies for deploy and build](#technologies-for-deploy-and-build)
- [Handle fault tolerance in synchronous applications](#handle-fault-tolerance-in-synchronous-applications)
- [When to use asynchronous communication](#when-to-use-asynchronous-communication)

### Standardization of the service stacks

All services are built in `node.js` using only `Common Javascript`. All services use `MongoDB` except `Payments`, that uses `mySQL`. Services run on a Docker container and are reachable through an Api Gateway.

### Service discovery solution

Service discovery is needed to locate service instances in dynamically assigned network locations in a cloud-based microservices location. It helps the instances to adapt and balance the load among themselves.

### Security aspects

As an application that deal with sensitive data, cryptography must be used. Not only with customer info, but also with order history, which contain payments info as well.

Network traffic must be managed with authentication, using tokens to prevent malicious and/or misuse access.

### Technologies for deploy and build

Services like [Travis-CI](https://www.travis-ci.com/), [Jenkins](https://www.jenkins.io/) or something similar to [GitHub Actions](https://github.com/features/actions) can be used to provide a continuous integration and deployment enviroment.

### Handle fault tolerance in synchronous applications

Tools like `cache` and `circuit breaker` must be used in synchronous applications to prevent overloads and to handle server side problems, such as inactivity, overloads and other events that might break the server.

### When to use asynchronous communication

Asynchronous communication should be used within the order process. When a customer makes an order, the payment or other processes can take some time, so they should receive a response that the order is in process while the system does it's task.

[⬆ Back to top](#ecomm)
