<script>
  import { onMount } from 'svelte';
  let message = '';
  let isDarkTheme = true;

  onMount(async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      message = data.message;
      document.body.classList.add('dark');
    } catch (error) {
      console.error('Error fetching message:', error);
      message = 'Error connecting to backend';
    }
  });

  function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark');
  }
</script>

<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/beercss@3.4.10/dist/cdn/beer.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/material-icons.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/beercss@3.4.10/dist/cdn/beer.min.js" type="module"></script>
</svelte:head>

<!-- Top Navigation -->
<nav class="top">
  <div class="brand">
    <a href="#" class="title">My App</a>
  </div>
  <div class="tabs">
    <a href="#" class="active">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
  <div class="right">
    <button class="circle transparent" on:click={toggleTheme}>
      <i class="material-icons">{isDarkTheme ? 'light_mode' : 'dark_mode'}</i>
    </button>
  </div>
</nav>

<div class="page-container">
  <!-- Main Content -->
  <main class="main-content">
    <div class="content-container">
      <!-- Welcome Container -->
      <div class="content-section">
        <div class="card">
          <div class="card-content">
            <h5>Welcome</h5>
            <p class="large">{message}</p>
          </div>
        </div>
      </div>

      <!-- Example of additional content section -->
      <div class="content-section">
        <div class="card">
          <div class="card-content">
            <h5>Additional Content</h5>
            <p>This is an example of how additional content sections can be added.</p>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Right Side Navigation -->
  <aside class="side-nav">
    <nav class="vertical">
      <a href="#" class="nav-link active">
        <i class="material-icons">dashboard</i>
        <span>Dashboard</span>
      </a>
      <a href="#" class="nav-link">
        <i class="material-icons">person</i>
        <span>Profile</span>
      </a>
      <a href="#" class="nav-link">
        <i class="material-icons">settings</i>
        <span>Settings</span>
      </a>
      <a href="#" class="nav-link">
        <i class="material-icons">help</i>
        <span>Help</span>
      </a>
    </nav>
  </aside>
</div>

<style>
  :global(body) {
    margin: 0;
    min-height: 100vh;
    background-color: var(--dark);
  }

  :global(body.dark) {
    background-color: var(--dark);
    color: var(--light);
  }

  nav.top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 0 1rem;
    height: 64px;
    background-color: var(--dark);
  }

  .page-container {
    display: flex;
    padding: 16px;
    margin-top: 64px;
    gap: 20px;
    min-height: calc(100vh - 64px);
    box-sizing: border-box;
  }

  .main-content {
    flex: 1;
  }

  .content-container {
    background-color: var(--surface);
    border-radius: 4px;
    padding: 1.5rem;
    box-shadow: var(--shadow-small);
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .content-section {
    width: 100%;
  }

  .content-section .card {
    margin: 0;
    background-color: var(--surface-variant);
    border-radius: 8px;
    box-shadow: var(--shadow);
  }

  .side-nav {
    width: 240px;
    background-color: var(--surface);
    border-radius: 4px;
    border-left: 1px solid var(--border);
    box-shadow: var(--shadow-small);
  }

  .vertical {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .nav-link {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: inherit;
    transition: background-color 0.2s;
    width: 100%;
    text-align: left;
    justify-content: flex-start;
  }

  .nav-link i {
    width: 24px;
    margin-right: 1rem;
    opacity: 0.8;
  }

  .nav-link:hover {
    background-color: var(--primary-hover);
  }

  .nav-link.active {
    background-color: var(--primary);
    color: white;
  }

  @media (max-width: 960px) {
    .page-container {
      flex-direction: column;
    }

    .side-nav {
      display: none;
    }
  }
</style>
