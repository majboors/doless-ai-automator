import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useGestureControl, FlightControls, GestureState } from '@/hooks/useGestureControl';
import { 
  Hand, 
  RotateCcw, 
  Settings, 
  Zap, 
  TrendingUp, 
  TrendingDown,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Gauge,
  Plane
} from 'lucide-react';

interface GestureControlPanelProps {
  className?: string;
}

export const GestureControlPanel: React.FC<GestureControlPanelProps> = ({ className }) => {
  const { gestureState, flightControls, resetControls, calibrate, config } = useGestureControl({
    sensitivity: 1.0,
    deadzone: 0.1,
    smoothing: 0.8,
  });

  const getGestureIcon = (gestureType: string) => {
    switch (gestureType) {
      case 'fist':
        return <Hand className="w-5 h-5 text-red-500" />;
      case 'open':
        return <Hand className="w-5 h-5 text-green-500" />;
      default:
        return <Hand className="w-5 h-5 text-gray-400" />;
    }
  };

  const getGestureLabel = (gestureType: string) => {
    switch (gestureType) {
      case 'fist':
        return 'Fist (Throttle Control)';
      case 'open':
        return 'Open Hand (Flight Controls)';
      default:
        return 'No Gesture Detected';
    }
  };

  const formatValue = (value: number) => {
    return Math.round(value).toString();
  };

  const getControlColor = (value: number) => {
    if (value === 0) return 'bg-gray-200';
    if (value > 0) return 'bg-green-500';
    return 'bg-red-500';
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Gesture Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hand className="w-5 h-5" />
            Gesture Status
          </CardTitle>
          <CardDescription>
            Current hand gesture detection and position
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {getGestureIcon(gestureState.gestureType)}
              <span className="font-medium">{getGestureLabel(gestureState.gestureType)}</span>
            </div>
            <Badge variant={gestureState.isDetected ? "default" : "secondary"}>
              {gestureState.isDetected ? "Active" : "Inactive"}
            </Badge>
          </div>
          
          {gestureState.isDetected && (
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">X Position</div>
                <div className="font-mono">{formatValue(gestureState.position.x)}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Y Position</div>
                <div className="font-mono">{formatValue(gestureState.position.y)}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Z Position</div>
                <div className="font-mono">{formatValue(gestureState.position.z)}</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Flight Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plane className="w-5 h-5" />
            Flight Controls
          </CardTitle>
          <CardDescription>
            Real-time control values from gesture input
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Throttle Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">Throttle</span>
                <Badge variant="outline" className="text-xs">
                  Fist Forward/Back
                </Badge>
              </div>
              <span className="font-mono text-lg">{formatValue(flightControls.throttle)}%</span>
            </div>
            <Progress 
              value={flightControls.throttle} 
              className="h-3"
            />
          </div>

          {/* Pitch Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="font-medium">Pitch</span>
                <Badge variant="outline" className="text-xs">
                  Open Hand Forward/Back
                </Badge>
              </div>
              <span className="font-mono text-lg">{formatValue(flightControls.pitch)}</span>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gray-200 rounded-full h-3"></div>
              <div 
                className={`h-3 rounded-full transition-all duration-200 ${getControlColor(flightControls.pitch)}`}
                style={{ 
                  width: `${Math.abs(flightControls.pitch)}%`,
                  marginLeft: flightControls.pitch < 0 ? `${100 - Math.abs(flightControls.pitch)}%` : '50%',
                  transform: 'translateX(-50%)'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Nose Down</span>
              <span>Nose Up</span>
            </div>
          </div>

          {/* Roll Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 text-purple-500" />
                <span className="font-medium">Roll</span>
                <Badge variant="outline" className="text-xs">
                  Open Hand Left/Right
                </Badge>
              </div>
              <span className="font-mono text-lg">{formatValue(flightControls.roll)}</span>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gray-200 rounded-full h-3"></div>
              <div 
                className={`h-3 rounded-full transition-all duration-200 ${getControlColor(flightControls.roll)}`}
                style={{ 
                  width: `${Math.abs(flightControls.roll)}%`,
                  marginLeft: flightControls.roll < 0 ? `${100 - Math.abs(flightControls.roll)}%` : '50%',
                  transform: 'translateX(-50%)'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Bank Left</span>
              <span>Bank Right</span>
            </div>
          </div>

          {/* Yaw Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowUp className="w-4 h-4 text-orange-500" />
                <span className="font-medium">Yaw</span>
                <Badge variant="outline" className="text-xs">
                  Open Hand Up/Down
                </Badge>
              </div>
              <span className="font-mono text-lg">{formatValue(flightControls.yaw)}</span>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gray-200 rounded-full h-3"></div>
              <div 
                className={`h-3 rounded-full transition-all duration-200 ${getControlColor(flightControls.yaw)}`}
                style={{ 
                  width: `${Math.abs(flightControls.yaw)}%`,
                  marginLeft: flightControls.yaw < 0 ? `${100 - Math.abs(flightControls.yaw)}%` : '50%',
                  transform: 'translateX(-50%)'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Rudder Left</span>
              <span>Rudder Right</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Control Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Control Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Button 
              onClick={resetControls}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Controls
            </Button>
            <Button 
              onClick={calibrate}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Calibrate
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Gesture Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Gesture Instructions</CardTitle>
          <CardDescription>
            How to control the system with hand gestures
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <Hand className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <div className="font-medium text-red-900">Fist Gesture</div>
                <div className="text-sm text-red-700">
                  Move your clenched fist forward/backward to control throttle
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <Hand className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <div className="font-medium text-green-900">Open Hand Gesture</div>
                <div className="text-sm text-green-700 space-y-1">
                  <div>• Forward/Backward: Control pitch (nose up/down)</div>
                  <div>• Left/Right: Control roll (bank left/right)</div>
                  <div>• Up/Down: Control yaw (rudder left/right)</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

