<?php

namespace App\Notifications;

class SendCredentials extends Notification
{
    /**
     * Get the mail representation of the notification.
     *
     * @param  $notification
     *
     * @return \App\Mail\Credentials
     */
    public function toMail($notification)
    {
        return new \App\Mail\Credentials($notification);
    }
}
