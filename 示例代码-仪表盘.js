//引入数据可视化组件
import { registerShape, Chart, Axis, Tooltip, Coord, Point, Guide, Series } from 'viser-react';


registerShape('point', 'pointer', {
  draw(cfg, container) {
    let point = cfg.points[0];
    point = this.parsePoint(point);
    const center = this.parsePoint({
      x: 0,
      y: 0,
    });
    container.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: point.x,
        y2: point.y + 15,
        stroke: cfg.color,
        lineWidth: 5,
        lineCap: 'round',
      }
    });
    return container.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 9.75,
        stroke: cfg.color,
        lineWidth: 4.5,
        fill: '#fff',
      }
    });
  }
});
const scale = [{
  dataKey: 'value',
  min: -20,
  max: 50,
  tickInterval: 2,
  nice: false,
}];
const data1 = [
  { value: 0 },
];
      return(
        <div>
        <Chart forceFit height={600} data={data1} scale={scale}>
          <Coord
            type="polar"
            startAngle={-202.5}
            endAngle={22.5}
            radius={1}
          />
          <Axis
            dataKey="value"
            zIndex={2}
            line={null}
            label={{
              offset: -16,
              textStyle: {
                fontSize: 18,
                textAlign: 'center',
                textBaseline: 'middle'
              }
            }}
            subTickCount={4}
            subTickLine={{
              length: -8,
              stroke: '#fff',
              strokeOpacity: 1,
            }}
            tickLine={{
              length: -20,
              stroke: '#fff',
              strokeOpacity: 1,
            }}
            grid={null}
          />
          <Axis dataKey="1" show={false} />
          <Series
            gemo="point"
            position="value*1"
            shape="pointer"
            color="#1890FF"
            active={false}
          />
          <Guide
            type="arc"
            zIndex={0}
            top={false}
            start={[-20, 0.945]}
            end={[50, 0.945]}
            style={{
              stroke: '#CBCBCB',
              lineWidth: 58,
            }}
          />
          <Guide
            type="arc"
            zIndex={1}
            start={[-20, 0.945]}
            end={[data1.value, 0.945]}
            style={{
              stroke: '#1890FF',
              lineWidth: 18,
            }}
          />
          <Guide
            type="html"
            position={['50%', '95%']}
            html={`
              <div style="width: 300px;text-align: center;">
                <p style="font-size: 20px; color: #545454;margin: 0;line-height: 30px;">技小新 www.jixin.pro</p>  
                <p style="font-size: 20px; color: #545454;margin: 0;line-height: 30px;">使用阿里云LinkDevelop平台</p> 
                <p style="font-size: 30px; color: #545454;margin: 0;line-height: 60px;">温度</p>
                <p style="font-size: 25px;color: #545454;margin: 0;">${data1[0].value}℃</p>
                
              </div>
            `}
          />
          </Chart>
          </div>
          )
