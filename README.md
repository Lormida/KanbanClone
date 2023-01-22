## T**echnical requirements**

### Inspiration

I was looking for an idea for a pet-project and I came across this site, where the most recent GURU-level of complexity was this project. I just add functionality and adopted it.

[https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB](https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB)

### Layout

__Main page / Add new task / View task__
  <div style="display:flex;width:100%;">
    <img style="width:32%; object-fit:contain" src="https://user-images.githubusercontent.com/73850614/213936168-1dc9316b-3e36-4677-bbec-fadd09e67fbe.png" />
    <img style="width:33%; object-fit:contain" src="https://user-images.githubusercontent.com/73850614/213936116-e11e61a3-00d8-437e-9c0e-d168acadb6ef.png" />
    <img style="width:33%; object-fit:contain" src="https://user-images.githubusercontent.com/73850614/213935934-d64cdc88-f828-471c-87db-aa67e6ce9130.png" />
  </div>

### Description

This project similar to canban-desk clone (to some extent) with auth, shared boards etc…

### Main features:

1. Opportunity to create the boards, desks within the boards;
2. Opportunity to add/alter/remove/view tasks and attach them to the desks;
3. Opportunity add subtasks to each task;
4. Drag’n’Drop for shifting tasks within the board (between the desks);
5. JWT-based auth (different users - different boards);
6. [SSR](https://nuxt.com/);
7. [Asynchronous state management](https://tanstack.com/query/latest)
8. [**Feature-sliced architecture**](https://feature-sliced.design/docs);
9. Unit tests for business logic;
10. Component tests;
11. Stories for UI components;
12. Complicated animations.

### Optimistic features:

1. The interacting with welcome guide (during first visit after registration);
2. OAuth v2 (gmail);
3. Public one-time link to particular desk (even for non-registered users);
4. Several user roles (with different permission - full access to own boards / any boards, read-only, …;
5. Shared boards between several users (friends mechanics);
6. Realtime interaction with shared boards (websockets).

### Core tech stack (current)

**Frontend:**

1. Nuxt 3 (SSR, Fullstack meta framework, based on Vue 3);
2. UnoCSS (atomic CSS-engine);
3. [**Vue-Query**](https://tanstack.com/query/v4/docs/vue/overview)
4. Vite (build tool);
5. Vuelidate (form validation);
6. VueUse (utility functions);
7. Headless UI (some UI components);
8. [**Motion one** (animations)](https://motion.dev/vue/quick-start);
9. Vitest (unit tests);
10. Testing-library (component tests);
11. Storybook (stories for components);
12. ESLint, Prettier, Stylelint, Husky;
13. CI/CD (github actions).

**Backend-only:**

1. [Planetscale (serverless SQL platform)](https://planetscale.com/);
2. Prisma (ORM for database);
3. JWT & bcrypt (for auth).
