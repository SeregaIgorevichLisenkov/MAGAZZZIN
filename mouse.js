const containers = document.querySelectorAll('.container');

        containers.forEach(container => {
            const tooltip = container.querySelector('.tooltip');

            container.addEventListener('mouseover', () => {
                tooltip.style.display = 'block';
            });

            container.addEventListener('mouseout', () => {
                tooltip.style.display = 'none';
            });

            container.addEventListener('mousemove', (e) => {
                const x = e.clientX - container.getBoundingClientRect().left;
                const y = e.clientY - container.getBoundingClientRect().top;
                
                tooltip.style.left = x + 'px';
                tooltip.style.top = y + 'px';
            });
        });