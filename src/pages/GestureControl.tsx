import React from 'react';
import { Navigation, Header } from '@/components/Navigation';
import { GestureControlPanel } from '@/components/GestureControlPanel';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hand, Zap, Plane, Target } from 'lucide-react';

const GestureControl = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-soft border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Hand className="w-4 h-4" />
            Advanced Gesture Control
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            <span className="text-primary font-medium">Refined Gesture Control</span> System
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Intuitive hand gesture recognition for precise flight control. 
            <span className="text-primary font-medium">Single hand operation</span> with 
            natural movements for throttle, pitch, roll, and yaw control.
          </p>
        </div>

        {/* Feature Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Hand className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-lg">Fist Control</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Clenched hand forward/backward movement controls throttle
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Plane className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Open Hand</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Open hand controls pitch, roll, and yaw with natural movements
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Precise Control</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                High-precision gesture recognition with configurable sensitivity
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Real-time</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Low-latency processing with smooth control transitions
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Control Mapping */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hand className="w-5 h-5" />
              Gesture Control Mapping
            </CardTitle>
            <CardDescription>
              Detailed mapping of hand gestures to flight control functions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Fist Controls */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Hand className="w-4 h-4 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Fist Gesture</h3>
                  <Badge variant="destructive">Throttle Control</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">Forward Movement</div>
                      <div className="text-sm text-muted-foreground">Increase throttle</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">Backward Movement</div>
                      <div className="text-sm text-muted-foreground">Decrease throttle</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Open Hand Controls */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Hand className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Open Hand</h3>
                  <Badge variant="default">Flight Controls</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">Forward/Backward</div>
                      <div className="text-sm text-muted-foreground">Pitch control (nose up/down)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">Left/Right</div>
                      <div className="text-sm text-muted-foreground">Roll control (bank left/right)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">Up/Down</div>
                      <div className="text-sm text-muted-foreground">Yaw control (rudder left/right)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Control Panel */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-foreground mb-4">
              <span className="text-primary font-medium">Live Control Panel</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time gesture detection and flight control visualization
            </p>
          </div>
          
          <GestureControlPanel />
        </div>

        {/* Technical Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Specifications</CardTitle>
            <CardDescription>
              System requirements and performance characteristics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Detection Range</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• X-axis: ±200 units</li>
                  <li>• Y-axis: ±200 units</li>
                  <li>• Z-axis: ±100 units</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Control Range</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Throttle: 0-100%</li>
                  <li>• Pitch: -100 to +100</li>
                  <li>• Roll: -100 to +100</li>
                  <li>• Yaw: -100 to +100</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Performance</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Update Rate: 10 FPS</li>
                  <li>• Latency: &lt;100ms</li>
                  <li>• Smoothing: 80%</li>
                  <li>• Deadzone: 10%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default GestureControl;

