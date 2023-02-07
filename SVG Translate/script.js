let translate_align = () => {
    let svg = document.querySelector("svg");
    let groupTag = svg.getElementById("group_to_translate");
    let anchorPoint;

    function shiftViewBox(deltaX, deltaY) {
        svg.viewBox.baseVal.x += deltaX;
        svg.viewBox.baseVal.y += deltaY;
    }

    function svgCoords(event, elem) {
        let ctm = elem.getScreenCTM();
        let pt = document.querySelector("svg").createSVGPoint();
        pt.x = event.clientX;
        pt.y = event.clientY;
        return pt.matrixTransform(ctm.inverse());
    }

    groupTag.addEventListener("mousedown", function (e) {
        anchorPoint = svgCoords(e, svg);
        groupTag.addEventListener("mousemove", move);
        groupTag.addEventListener("mouseup", cancelMove);
    });

    function cancelMove(e) {
        groupTag.removeEventListener("mousemove", move);
        groupTag.removeEventListener("mouseup", cancelMove);
        anchorPoint = undefined;
    }

    function move(e) {
        let targetPoint = svgCoords(e, svg);
        shiftViewBox(anchorPoint.x - targetPoint.x,
            anchorPoint.y - targetPoint.y);
    }
}

// translate_align();


let scroll_and_pan = () => {
    let initialZoomScaleX = 1,
        initialZoomScaleY = 1,
        zoomScaleX = initialZoomScaleX,
        zoomScaleY = initialZoomScaleY,
        //panning related
        startCoords = { x: 0, y: 0 },
        lastPosition = { x: 0, y: 0 },
        isMouseDown = false,

        canvasContainer = document.querySelector('#abc'),
        speed = 0.09,
        pos = { x: 0, y: 0 },
        target = { x: 0, y: 0 },
        pointer = { x: 0, y: 0 };



    canvasContainer.style.transform = `matrix(${zoomScaleX},0,0,${zoomScaleY},0,0)`;

    document.body.style.overflow = "hidden"

    let wheelEvent = event => {
        event.preventDefault();

        pointer.x = event.pageX - canvasContainer.offsetLeft;
        pointer.y = event.pageY - canvasContainer.offsetTop;
        target.x = (pointer.x - pos.x) / zoomScaleX;
        target.y = (pointer.y - pos.y) / zoomScaleY;

        zoomScaleX += -1 * Math.max(-1, Math.min(1, event.deltaY)) * speed * zoomScaleX;
        zoomScaleY += -1 * Math.max(-1, Math.min(1, event.deltaY)) * speed * zoomScaleY;

        pos.x = -target.x * zoomScaleX + pointer.x;
        pos.y = -target.y * zoomScaleY + pointer.y;
        if (zoomScaleX > initialZoomScaleX) {
            canvasContainer.style.transform = `matrix(${zoomScaleX},0,0,${zoomScaleY},${pos.x},${pos.y})`;
        } else {
            zoomScaleX = initialZoomScaleX;
            zoomScaleY = initialZoomScaleY;
            pos = { x: 0, y: 0 };
            target = { x: 0, y: 0 };
            pointer = { x: 0, y: 0 };
            canvasContainer.style.transform = `matrix(${zoomScaleX},0,0,${zoomScaleY},${pos.x},${pos.y})`;
        }
    }

    canvasContainer.addEventListener('wheel', wheelEvent, { passive: false });

    canvasContainer.onmousemove = function (e) {
        var xVal = e.pageX - this.offsetLeft,
                yVal = e.pageY - this.offsetTop;

            if (isMouseDown) {
                canvasContainer.style.transform = `matrix(${zoomScaleX},0,0,${zoomScaleY},${xVal - startCoords.x},${yVal - startCoords.y})`;
            }
    };

    canvasContainer.onmousedown = function (e) {
        isMouseDown = true;
            startCoords = {
                x: e.pageX - this.offsetLeft - pos.x,
                y: e.pageY - this.offsetTop - pos.y
            };

    };

    canvasContainer.onmouseup = function (e) {
        isMouseDown = false;
        pos = {
            x: e.pageX - this.offsetLeft - startCoords.x,
            y: e.pageY - this.offsetTop - startCoords.y
        };
    };
}

scroll_and_pan();