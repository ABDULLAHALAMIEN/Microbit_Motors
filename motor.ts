// Motor channel.
enum MotorChannel {
    M1 = 0,
    M2 = 1,
    
    //% block="all"
    All = 1000,
};

// Motor direction.
enum MotorDirection {
    //% block="forward"
    Forward = 0,

    //% block="backward"
    Backward = 1
};

namespace MakerDrive {
    /**
     * Run the motor forward or backward (Speed = 0-255).
     * @param motor Motor channel.
     * @param direction Motor direction.
     * @param speed Motor speed (0-255). eg: 128
     */
    //% group="DC Motors"
    //% weight=19
    //% blockGap=40
    //% blockId=MakerDrive_run_motor
    //% block="run motor %motor %direction at speed %speed"
    //% speed.min=0 speed.max=255
    export function runMotor(motor: MotorChannel, direction: MotorDirection, speed: number): void {
        speed = MakerDrive.limit(speed, 0, 255);
        switch (motor) {
            case MotorChannel.M1:
                if (direction == MotorDirection.Forward) {
                    MakerDrive.i2cWrite(REG_ADD_M1A, speed);
                    MakerDrive.i2cWrite(REG_ADD_M1B, 0);
                }
                else {
                    MakerDrive.i2cWrite(REG_ADD_M1A, 0);
                    MakerDrive.i2cWrite(REG_ADD_M1B, speed);
                }
                break;

            case MotorChannel.M2:
                if (direction == MotorDirection.Forward) {
                    MakerDrive.i2cWrite(REG_ADD_M2A, speed);
                    MakerDrive.i2cWrite(REG_ADD_M2B, 0);
                }
                else {
                    MakerDrive.i2cWrite(REG_ADD_M2A, 0);
                    MakerDrive.i2cWrite(REG_ADD_M2B, speed);
                }
                break;

            case MotorChannel.All:
                if (direction == MotorDirection.Forward) {
                    MakerDrive.i2cWrite(REG_ADD_M1A, speed);
                    MakerDrive.i2cWrite(REG_ADD_M1B, 0);
                    MakerDrive.i2cWrite(REG_ADD_M2A, speed);
                    MakerDrive.i2cWrite(REG_ADD_M2B, 0);
                }
                else {
                    MakerDrive.i2cWrite(REG_ADD_M1A, 0);
                    MakerDrive.i2cWrite(REG_ADD_M1B, speed);
                    MakerDrive.i2cWrite(REG_ADD_M2A, 0);
                    MakerDrive.i2cWrite(REG_ADD_M2B, speed);
                }
                break;
        }
    }
}
