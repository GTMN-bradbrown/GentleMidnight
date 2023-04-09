<button on:click><slot></slot></button>

<style>
    button {
        width: 13mm;
        height: 13mm;
        border-radius: 50%;
        font-weight: 600;
        color: #3F00FF;
        background-color: #F6F1D5;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        transition: border-radius 0.125s ease;
    }
    button:hover {
        background-color: #E0DBC2;
        border-radius: 45%;
    }
    button:active {
        background-color: #CCC7B0;
        border-radius: 25%;
    }
</style>